import { useEffect, useRef, useCallback } from 'react';

function AnimatedTimeline({ items, containerClassName = "max-w-[1200px] mx-auto" }) {
    const timelineRef = useRef(null);
    const fillRef = useRef([]);
    const rafRef = useRef(null);

    const handleScroll = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        rafRef.current = requestAnimationFrame(() => {
            if (!timelineRef.current) return;

            const timeline = timelineRef.current;
            const rect = timeline.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const triggerPoint = windowHeight * 0.6;
            const scrolledPast = triggerPoint - rect.top;
            const progress = Math.max(0, Math.min(1, scrolledPast / rect.height));
            const fillPercent = progress * 100;

            fillRef.current.forEach((el, index) => {
                if (!el) return;
                const segmentStart = (index / items.length) * 100;
                const segmentEnd = ((index + 1) / items.length) * 100;
                const segmentProgress = Math.max(0, Math.min(100,
                    ((fillPercent - segmentStart) / (segmentEnd - segmentStart)) * 100
                ));
                el.style.height = `${segmentProgress}%`;
            });
        });
    }, [items.length]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [handleScroll]);

    return (
        <div ref={timelineRef} className={`flex flex-col relative ${containerClassName}`}>
            {items.map((item, index) => (
                <div key={index} className="flex gap-6 sm:gap-10 relative min-h-[300px]">
                    {/* Utils Column (Line + Icon) */}
                    <div className="w-[40px] sm:w-[60px] flex-shrink-0 flex justify-center">
                        <div className="flex flex-col items-center h-full">
                            <div className="w-8 h-8 z-[2] flex items-center justify-center">
                                <div
                                    className={`w-full h-full rounded-full flex items-center justify-center shadow-md ${item.iconBgClass || ''}`}
                                    style={item.iconBgStyle}
                                >
                                    <img
                                        src={item.icon}
                                        alt="Step Icon"
                                        className={`w-[18px] h-[18px] object-contain ${item.iconClass || ''}`}
                                    />
                                </div>
                            </div>
                            {index < items.length - 1 && (
                                <div className="w-1 flex-grow min-h-[100px] relative overflow-hidden" style={{ backgroundColor: '#E5EAF2' }}>
                                    <div
                                        ref={el => fillRef.current[index] = el}
                                        className="absolute top-0 left-0 w-full"
                                        style={{
                                            height: '0%',
                                            backgroundColor: item.fillColor,
                                            transition: 'height 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content Wrapper */}
                    <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-16 flex-1 items-start pb-12 sm:pb-16 md:pb-20">
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AnimatedTimeline;
