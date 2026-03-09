import React from 'react';
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
        <section className="py-24 bg-white">
            <div className="container px-4 mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mx-auto mb-20 max-w-2xl">
                    <h2 className="text-[40px] font-bold text-[#0E1624] mb-4">
                        Global Compliance Readiness Dashboard
                    </h2>
                    <p className="text-[#475569] text-xl leading-relaxed">
                        Track FSMA 204 (Dec 2026), ISO 22005 audit readiness, live EUDR enforcement, and GS1 mandates in one real-time view.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {readinessCards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#F8FAFC] rounded-[32px] p-10 flex flex-col items-center text-center justify-between h-full border border-[#E2E8F0]/30 shadow-sm transition-all hover:bg-white hover:border-[#143A79]/10"
                        >
                            <h3 className="mb-8 text-[22px] font-bold text-[#0E1624] tracking-tight">
                                {card.title}
                            </h3>
                            <div className="w-[140px] h-[140px] flex items-center justify-center mb-10">
                                <img
                                    src={card.logo}
                                    alt={card.title}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <p className="text-[#0E1624] text-[18px] font-semibold leading-tight">
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
