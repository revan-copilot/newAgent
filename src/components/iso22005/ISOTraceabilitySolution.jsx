import kdeImage from '../../assets/images/kde.png';
import SplitLayout from '../common/SplitLayout';

const features = [
    {
        title: 'CTE Templates',
        description: 'ISO-aligned Critical Tracking Event templates that match requirements exactly for consistent traceability recording.',
    },
    {
        title: 'KDE Forms',
        description: 'Structured KDE forms that ensure complete and accurate data capture at every tracking step.',
    },
    {
        title: 'Automated Audit Trail',
        description: 'Blockchain-verified audit logs that provide tamper-proof traceability history.',
    },
    {
        title: 'One-Click Reports',
        description: 'Instantly generate full certification and compliance report packages with a single click.',
    },
    {
        title: 'System Documentation',
        description: 'Auto-generated traceability system documents ready for audits and reviews.',
    },
];

function ISOTraceabilitySolution() {
    return (
        <SplitLayout
            title="TRAZEIT's ISO 22005 Traceability Solution"
            description="TRAZEIT's ISO 22005 solution delivers end-to-end food chain traceability with standards-aligned data and processes, ensuring compliance, transparency, and audit readiness."
            image={kdeImage}
            imageAlt="TRAZEIT ISO 22005 Solution"
            alignItems="start"
            imageSticky={true}
        >
            {/* Feature List */}
            <div className="space-y-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                            <svg className="w-6 h-6 text-primary-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="M9 12l2 2 4-4" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="mb-1" style={{ fontSize: '20px', fontWeight: 600, color: '#0E1624' }}>
                                {feature.title}
                            </h4>
                            <p style={{ fontSize: '20px', fontWeight: 400, lineHeight: '26px', color: '#0E1624' }}>
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </SplitLayout>
    );
}

export default ISOTraceabilitySolution;
