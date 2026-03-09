import ComplianceSplitSection from './ComplianceSplitSection';

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

import kdeImage from '../../assets/images/kde.png';

function ISOTraceabilitySolution() {
    return (
        <ComplianceSplitSection
            title="TRAZEIT's ISO 22005 Traceability Solution"
            description="TRAZEIT's ISO 22005 solution delivers end-to-end food chain traceability with standards-aligned data and processes, ensuring compliance, transparency, and audit readiness."
            items={features}
            image={kdeImage}
            imageAlt="TRAZEIT ISO 22005 Solution"
        />
    );
}

export default ISOTraceabilitySolution;
