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
        <section className="section section-light">
            <div className="container">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-text-dark mb-4">
                        Global Compliance Automation Suite
                    </h2>
                    <p className="text-text-gray text-base sm:text-lg leading-relaxed">
                        Everything you need to meet global regulatory requirements—built into one intelligent, scalable compliance platform
                    </p>
                </div>

                {/* Cards — Top row: 3, Bottom row: 2 centered */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {automationCards.slice(0, 3).map((card, index) => (
                        <AutomationCard key={index} card={card} />
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-[calc(66.666%+12px)] mx-auto">
                    {automationCards.slice(3).map((card, index) => (
                        <AutomationCard key={index + 3} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function AutomationCard({ card }) {
    return (
        <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-md transition-shadow duration-300 flex flex-col">
            <div className="w-14 h-14 mb-5">
                <img
                    src={card.icon}
                    alt={card.title}
                    className="w-full h-full object-contain"
                />
            </div>
            <h3 className="text-lg font-bold text-text-dark mb-3">
                {card.title}
            </h3>
            <p className="text-text-gray text-sm leading-relaxed mb-6 flex-1">
                {card.description}
            </p>
            <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-blue border border-primary-blue rounded-[8px] px-4 py-2 w-fit hover:bg-blue-50 transition-colors duration-200"
            >
                Learn More <span>→</span>
            </a>
        </div>
    );
}

export default ComplianceAutomation;
