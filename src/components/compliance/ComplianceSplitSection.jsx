import React from 'react';
import securityCheck from '../../assets/images/security-check-stroke.png';

function ComplianceSplitSection({
    title,
    description,
    items,
    image,
    imageAlt,
    reverse = false,
    bgClass = "bg-white",
    customIcon = null
}) {
    return (
        <section className={`py-24 ${bgClass} overflow-hidden`}>
            <div className="container px-4 mx-auto max-w-7xl">
                <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
                    <div className="flex-1 w-full text-left">
                        <h2 className="text-[40px] font-bold text-[#0E1624] mb-8 leading-tight tracking-tight">
                            {title}
                        </h2>
                        {description && (
                            <p className="text-[#475569] text-xl mb-12 leading-relaxed">
                                {description}
                            </p>
                        )}

                        {items && (
                            <div className="space-y-8">
                                {items.map((item, index) => (
                                    <div key={index} className="flex items-start gap-5 group">
                                        <div className="w-6 h-6 shrink-0 mt-1">
                                            <img
                                                src={item.icon || customIcon || securityCheck}
                                                alt="Check"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div>
                                            {item.title && (
                                                <h4 className="text-[18px] font-bold text-[#0E1624] mb-2 leading-tight">
                                                    {item.title}
                                                </h4>
                                            )}
                                            {item.description && (
                                                <p className="text-[#64748B] text-base leading-relaxed">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-xl">
                            <img
                                src={image}
                                alt={imageAlt}
                                className="w-full h-auto object-contain rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ComplianceSplitSection;
