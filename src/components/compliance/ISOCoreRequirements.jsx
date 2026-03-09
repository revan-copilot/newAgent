import ComplianceSplitSection from './ComplianceSplitSection';

const requirements = [
    {
        title: 'SYSTEM DESIGN',
        description: 'Documented processes, risk analysis',
    },
    {
        title: 'INTERNAL TRACEABILITY',
        description: 'Link inputs to outputs',
    },
    {
        title: 'SUPPLIER TRACEABILITY',
        description: 'Ingredient source identification',
    },
    {
        title: 'CUSTOMER TRACEABILITY',
        description: 'Product recipient records',
    },
    {
        title: 'MANAGEMENT REVIEW',
        description: 'Continuous improvement',
    },
];

import isoImage from '../../assets/images/iso-22005.png';

function ISOCoreRequirements() {
    return (
        <ComplianceSplitSection
            title="ISO 22005 Core Requirements"
            description="A standards-based traceability model covering system design, internal process linkage, supplier and customer traceability, and management review ensuring compliance, transparency, and recall readiness."
            items={requirements}
            image={isoImage}
            imageAlt="ISO 22005 Core Requirements"
        />
    );
}

export default ISOCoreRequirements;
