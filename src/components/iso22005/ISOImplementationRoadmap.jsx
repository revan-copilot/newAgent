import phase1 from '../../assets/images/phase-1.png';
import phase2 from '../../assets/images/phase-2.png';
import phase3 from '../../assets/images/phase-3.png';
import phase4 from '../../assets/images/phase-4.png';
import phase5 from '../../assets/images/phase-5.png';
import phaseIcon from '../../assets/images/phase-icon.png';
import AnimatedTimeline from '../common/AnimatedTimeline';

function ISOImplementationRoadmap() {
    const phases = [
        {
            label: 'PHASE 1 (2 WEEKS)',
            headline: 'Map the supply chain and identify all CTEs to ensure full traceability.',
            image: phase1,
            imageAlt: 'Supply chain mapping and CTE identification',
        },
        {
            label: 'PHASE 2 (3 WEEKS)',
            headline: 'Configure TRAZEIT Templates to customize traceability workflows with CTEs, KDEs, and standardized supply chain data.',
            image: phase2,
            imageAlt: 'Traceability template configuration',
        },
        {
            label: 'PHASE 3 (2 WEEKS)',
            headline: 'Test with key suppliers to validate data flow and ensure full system connectivity.',
            image: phase3,
            imageAlt: 'Supplier data flow validation',
        },
        {
            label: 'PHASE 4 (3 WEEKS)',
            headline: 'Deploy the full system rollout and train all partners for traceability workflow confidence.',
            image: phase4,
            imageAlt: 'System rollout and training',
        },
        {
            label: 'PHASE 5 (ONGOING)',
            headline: 'Prepare documentation and run mock audits to ensure continuous ISO 22005 compliance.',
            image: phase5,
            imageAlt: 'Compliance documentation and audit preparation',
        },
    ];

    const timelineItems = phases.map(phase => ({
        icon: phaseIcon,
        iconBgStyle: { backgroundColor: '#223C77' },
        iconClass: 'brightness-0 invert',
        fillColor: '#223C77',
        content: (
            <>
                <div className="md:flex-[0_0_40%] pt-2.5">
                    <span className="block font-bold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider" style={{ color: '#223C77' }}>{phase.label}</span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0E1624] leading-snug sm:leading-[50px]">{phase.headline}</h3>
                </div>
                <div className="flex-1 flex justify-start md:justify-end w-full">
                    <img src={phase.image} alt={phase.imageAlt} className="w-full md:w-[480px] max-w-full h-auto object-contain rounded-lg" />
                </div>
            </>
        )
    }));

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container">
                {/* Header */}
                <div className="text-center max-w-[800px] mx-auto mb-14 sm:mb-20">
                    <span className="block mb-4 text-[#1E4D8C] font-semibold text-base">Implementation Roadmap</span>
                    <h2 className="mb-6 text-[1.75rem] sm:text-[2.5rem] text-slate-800 font-bold">5-Phase Traceability Implementation Roadmap</h2>
                    <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
                        A structured five-phase roadmap that guides organizations from system design to full deployment, ensuring compliant, scalable, and audit-ready traceability with TRAZEIT.
                    </p>
                </div>

                {/* Timeline */}
                <AnimatedTimeline items={timelineItems} />

                {/* End-to-End Banner */}
                <div className="max-w-[1200px] mx-auto mt-12 sm:mt-16 rounded-xl px-6 sm:px-10 py-8 sm:py-10" style={{ backgroundColor: '#F4F7FC' }}>
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#223C77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="mb-2" style={{ fontWeight: 600, color: '#223C77', fontSize: '20px' }}>
                                End-to-End Certification Roadmap (Phases 1–5)
                            </h4>
                            <p style={{ fontWeight: 400, fontSize: '20px', lineHeight: '26px', color: '#0E1624' }}>
                                All five phases — from system design to management review — are completed within a structured 4–6 month timeline, ensuring audit-ready certification and compliance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ISOImplementationRoadmap;
