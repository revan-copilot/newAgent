import isoImage from '../../assets/images/iso-22005.png';
import SplitLayout from '../common/SplitLayout';

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

function ISOCoreRequirements() {
    return (
        <SplitLayout
            title="ISO 22005 Core Requirements"
            description="A standards-based traceability model covering system design, internal process linkage, supplier and customer traceability, and management review ensuring compliance, transparency, and recall readiness."
            image={isoImage}
            imageAlt="ISO 22005 Core Requirements"
        >
            {/* Requirements List */}
            <div className="space-y-6">
                {requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                            <svg className="w-6 h-6 text-primary-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="M9 12l2 2 4-4" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-text-dark uppercase tracking-wide">
                                {req.title}
                            </h4>
                            <p className="text-text-gray text-sm">
                                {req.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </SplitLayout>
    );
}

export default ISOCoreRequirements;
