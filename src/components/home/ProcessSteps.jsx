import captureImg from '../../assets/images/capture_step.png';
import secureImg from '../../assets/images/secure_step.png';
import verifyImg from '../../assets/images/verify_step.png';
import shareImg from '../../assets/images/share_step.png';
import captureLogo from '../../assets/images/capture-logo.png';
import secureLogo from '../../assets/images/security-logo.png';
import verifyLogo from '../../assets/images/verify-logo.png';
import shareLogo from '../../assets/images/export-logo.png';

function ProcessSteps() {
    const steps = [
        {
            icon: captureLogo,
            title: 'CAPTURE',
            headline: 'Deploy IoT devices, QR codes, or mobile app to collect Critical Tracking Events (CTEs) at every supply chain step',
            colorClass: 'step-blue',
            image: captureImg,
            imageAlt: 'Illustration of supply chain data capture'
        },
        {
            icon: secureLogo,
            title: 'SECURE',
            headline: 'Hyperledger Fabric blockchain automatically records and timestamps each transaction',
            colorClass: 'step-navy',
            image: secureImg,
            imageAlt: 'Illustration of blockchain security'
        },
        {
            icon: verifyLogo,
            title: 'VERIFY',
            headline: 'Real-time validation ensures data quality and compliance requirements',
            colorClass: 'step-green',
            image: verifyImg,
            imageAlt: 'Illustration of data verification'
        },
        {
            icon: shareLogo,
            title: 'SHARE',
            headline: 'Role-based access for suppliers, retailers, regulators, and consumers',
            colorClass: 'step-orange',
            image: shareImg,
            imageAlt: 'Illustration of data sharing network'
        }
    ];

    return (
        <section id="how-it-works" className="process-steps">
            <div className="container">
                <div className="process-steps-header">
                    <span className="section-title-label">How It Works</span>
                    <h2>Simple 4-Step Implementation Process</h2>
                    <p>
                        Trazeit makes end-to-end traceability easy to deploy and effortless to scale. Our streamlined four-step process ensures rapid adoption without disrupting your existing operations.
                    </p>
                </div>
                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <div key={index} className={`timeline-step ${step.colorClass}`}>
                            <div className="timeline-utils-col">
                                <div className="timeline-connector">
                                    <div className="step-icon">
                                        <div className="icon-circle">
                                            <img src={step.icon} alt="Step Icon" />
                                        </div>
                                    </div>
                                    {index < steps.length - 1 && <div className="step-line"></div>}
                                </div>
                            </div>
                            <div className="timeline-content-wrapper">
                                <div className="timeline-text">
                                    <span className="step-label">{step.title}</span>
                                    <h3>{step.headline}</h3>
                                </div>
                                <div className="timeline-image">
                                    <img src={step.image} alt={step.imageAlt} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProcessSteps;
