import isoIcon from '../../assets/images/iso-2205.png';
import fsmaIcon from '../../assets/images/fsma-204.png';
import gs1Icon from '../../assets/images/gs1-compilance.png';
import eudrIcon from '../../assets/images/eudr-compilance.png';
import interactiveIcon from '../../assets/images/interactive-compilance.png';

const automationCards = [
    {
        icon: isoIcon,
        title: 'ISO 22005 Certification Support',
        description:
            'End-to-end traceability system design with full audit preparation to meet ISO 22005 requirements',
    },
    {
        icon: fsmaIcon,
        title: 'FSMA 204 Compliance Automation',
        description:
            "Automated end-to-end traceability designed to meet the FDA's 20-minute traceability requirement.",
    },
    {
        icon: gs1Icon,
        title: 'GS1 Standards Compliance',
        description:
            'Built-in identifier validation and QR code generation aligned with GS1 global standards.',
    },
    {
        icon: eudrIcon,
        title: 'EUDR Compliance Monitoring',
        description:
            'Verify deforestation-free sourcing with precise geolocation data and automated risk scoring',
    },
    {
        icon: interactiveIcon,
        title: 'Interactive Compliance Checklist',
        description:
            'Identify and score compliance gaps with guided, step-by-step assessments.',
    },
];

function ComplianceAutomation() {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mx-auto mb-20 max-w-3xl">
                    <h2 className="text-[40px] font-bold text-[#0E1624] mb-4 tracking-tight">
                        Global Compliance Automation Suite
                    </h2>
                    <p className="text-[#475569] text-xl leading-relaxed">
                        Everything you need to meet global regulatory requirements—built into one intelligent, scalable compliance platform
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="flex flex-wrap justify-center gap-8">
                    {automationCards.map((card, index) => (
                        <div
                            key={index}
                            className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] p-10 rounded-[32px] bg-[#F8FAFC] border border-[#E2E8F0]/30 shadow-sm transition-all hover:bg-white hover:border-[#143A79]/10 flex flex-col items-start"
                        >
                            <div className="w-16 h-16 mb-8 flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm border border-[#E2E8F0]/50">
                                <img
                                    src={card.icon}
                                    alt={card.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-[22px] font-bold text-[#0E1624] mb-4 tracking-tight">
                                {card.title}
                            </h3>
                            <p className="text-[#475569] text-base leading-relaxed mb-10 font-normal flex-1">
                                {card.description}
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-3 text-[18px] font-bold text-[#143A79] px-6 py-3 border border-[#143A79] rounded-xl hover:bg-[#143A79] hover:text-white transition-all duration-300"
                            >
                                Learn More
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ComplianceAutomation;
