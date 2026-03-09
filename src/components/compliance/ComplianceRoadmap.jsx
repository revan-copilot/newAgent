import React from 'react';
import AnimatedTimeline from '../common/AnimatedTimeline';
import phaseIcon from '../../assets/images/phase-icon.png';

function ComplianceRoadmap({
    badge,
    title,
    description,
    phases,
    bgClass = "bg-white",
    footerBanner
}) {
    const timelineItems = phases.map((phase) => ({
        icon: phaseIcon,
        iconBgStyle: { backgroundColor: '#223C77' },
        iconClass: 'brightness-0 invert',
        fillColor: '#223C77',
        content: (
            <>
                <div className="md:flex-[0_0_45%] pt-2.5">
                    <span className="block font-bold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider" style={{ color: '#223C77' }}>{phase.label}</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0E1624] leading-snug sm:leading-[40px]">{phase.headline}</h3>
                </div>
                <div className="flex-1 flex justify-start md:justify-end w-full">
                    <img src={phase.image} alt={phase.imageAlt} className="w-full md:w-[480px] max-w-full h-auto object-contain rounded-2xl shadow-lg border border-[#EDF2F7]" />
                </div>
            </>
        )
    }));

    return (
        <section className={`py-20 ${bgClass}`}>
            <div className="container px-4 mx-auto">
                <div className="text-center mx-auto mb-20">
                    {badge && <span className="block mb-4 text-[#1E4D8C] font-semibold text-base">{badge}</span>}
                    <h2 className="text-[36px] font-semibold font-['Inter'] text-[#0E1624] mb-4">
                        {title}
                    </h2>
                    <p className="text-[#475569] text-lg leading-relaxed mx-auto">
                        {description}
                    </p>
                </div>

                <AnimatedTimeline items={timelineItems} />

                {footerBanner && (
                    <div className="max-w-[1200px] mx-auto mt-12 sm:mt-16 rounded-xl px-6 sm:px-10 py-8 sm:py-10" style={{ backgroundColor: '#F4F7FC' }}>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-0.5">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#223C77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                    <line x1="12" y1="9" x2="12" y2="13" />
                                    <line x1="12" y1="17" x2="12.01" y2="17" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#223C77] text-xl mb-2">
                                    {footerBanner.title}
                                </h4>
                                <p className="text-[#0E1624] text-lg leading-relaxed">
                                    {footerBanner.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ComplianceRoadmap;
