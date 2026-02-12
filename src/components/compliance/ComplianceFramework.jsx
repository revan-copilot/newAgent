import frameworkImage from '../../assets/images/compilance-framework-coverage.png';

const frameworks = [
    {
        title: 'ISO 22005:2007',
        description: 'Complete traceability systems',
    },
    {
        title: 'FSMA 204',
        description: '20-minute traceability rule',
    },
    {
        title: 'GS1 Standards',
        description: 'GTIN/GLN/SSCC/Digital Link',
    },
    {
        title: 'EUDR',
        description: 'Deforestation-free geolocation',
    },
    {
        title: 'FSSAI',
        description: 'Indian food safety regulations',
    },
    {
        title: '50+ country',
        description: 'Specific frameworks',
    },
];

function ComplianceFramework() {
    return (
        <section className="section section-light">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="flex-1">
                        <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-text-dark mb-4">
                            Compliance Framework Coverage
                        </h2>
                        <p className="text-text-gray text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
                            End-to-end support for global, regional, and retailer-mandated compliance frameworks—built to scale across markets and regulations
                        </p>

                        {/* Framework Checklist */}
                        <div className="space-y-6">
                            {frameworks.map((fw, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    {/* Shield Check Icon */}
                                    <div className="flex-shrink-0 mt-0.5">
                                        <svg
                                            className="w-6 h-6 text-primary-blue"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-text-dark">
                                            {fw.title}
                                        </h4>
                                        <p className="text-text-gray text-sm">
                                            {fw.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <img
                            src={frameworkImage}
                            alt="Compliance Framework Coverage"
                            className="w-full max-w-[520px] rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ComplianceFramework;
