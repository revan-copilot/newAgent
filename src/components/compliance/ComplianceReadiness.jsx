import fsmaLogo from '../../assets/images/fsma-logo.png';
import isoLogo from '../../assets/images/logo-ISO.png';
import eudrLogo from '../../assets/images/eudr-logo.png';
import gs1Logo from '../../assets/images/logo_gs1.png';

const readinessCards = [
    {
        title: 'FSMA 204 Deadline',
        logo: fsmaLogo,
        description: 'Dec 2026 (12 months left)',
    },
    {
        title: 'ISO 22005 Audits',
        logo: isoLogo,
        description: 'Required for 68% EU exports',
    },
    {
        title: 'EUDR Enforcement',
        logo: eudrLogo,
        description: 'Live since Dec 2024',
    },
    {
        title: 'GS1 Mandate',
        logo: gs1Logo,
        description: 'Required for 85% global retailers',
    },
];

function ComplianceReadiness() {
    return (
        <section className="py-20 bg-white">
            <div className="container">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-text-dark mb-4">
                        Global Compliance Readiness Dashboard
                    </h2>
                    <p className="text-text-gray text-base sm:text-lg leading-relaxed">
                        Track FSMA 204 (Dec 2026), ISO 22005 audit readiness, live EUDR enforcement, and GS1 mandates in one real-time view—so deadlines never become disruptions
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {readinessCards.map((card, index) => (
                        <div
                            key={index}
                            className="rounded-2xl p-8 flex flex-col items-center text-center justify-between h-full" style={{ backgroundColor: '#EEF2F7' }}
                        >
                            <h3 className="mb-5" style={{ fontSize: '20px', fontWeight: 600, color: '#0E1624' }}>
                                {card.title}
                            </h3>
                            <div className="w-20 h-20 lg:w-[120px] lg:h-[120px] flex items-center justify-center mb-5">
                                <img
                                    src={card.logo}
                                    alt={card.title}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <p style={{ fontSize: '16px', fontWeight: 400, color: '#0E1624' }}>
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ComplianceReadiness;
