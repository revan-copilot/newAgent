import React, { useEffect } from 'react';

function ComplianceHeroCentered({ title, description, image, imageAlt, bgClass = "bg-[#F8FAFC]" }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={`pt-32 lg:pt-40 pb-16 ${bgClass}`}>
            <div className="container px-4 mx-auto">
                <div className="text-center mx-auto mb-16">
                    <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[4.5rem] leading-[1.1] font-medium font-['Lateef'] text-[#0E1624] mb-6 px-4 sm:px-6 lg:px-10">
                        {title}
                    </h1>
                    <p className="text-[#475569] text-base sm:text-lg lg:text-xl leading-relaxed mx-auto">
                        {description}
                    </p>
                </div>

                <div className="w-full mx-auto flex justify-center">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

export default ComplianceHeroCentered;
