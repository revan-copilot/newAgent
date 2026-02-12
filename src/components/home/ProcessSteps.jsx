import captureImg from '../../assets/images/capture_step.png';
import secureImg from '../../assets/images/secure_step.png';
import verifyImg from '../../assets/images/verify_step.png';
import shareImg from '../../assets/images/share_step.png';
import captureLogo from '../../assets/images/capture-logo.png';
import secureLogo from '../../assets/images/security-logo.png';
import verifyLogo from '../../assets/images/verify-logo.png';
import shareLogo from '../../assets/images/export-logo.png';
import AnimatedTimeline from '../common/AnimatedTimeline';

function ProcessSteps() {
    const stepsData = [
        {
            icon: captureLogo,
            title: 'CAPTURE',
            headline: 'Deploy IoT devices, QR codes, or mobile app to collect Critical Tracking Events (CTEs) at every supply chain step',
            colorClass: 'bg-[#2563EB]',
            fillColor: '#2563EB',
            textClass: 'text-[#2D6CDF]',
            image: captureImg,
            imageAlt: 'Illustration of supply chain data capture'
        },
        {
            icon: secureLogo,
            title: 'SECURE',
            headline: 'Hyperledger Fabric blockchain automatically records and timestamps each transaction',
            colorClass: 'bg-[#1E3A8A]',
            fillColor: '#1E3A8A',
            textClass: 'text-[#144079]',
            image: secureImg,
            imageAlt: 'Illustration of blockchain security'
        },
        {
            icon: verifyLogo,
            title: 'VERIFY',
            headline: 'Real-time validation ensures data quality and compliance requirements',
            colorClass: 'bg-[#059669]',
            fillColor: '#059669',
            textClass: 'text-[#1E8E5A]',
            image: verifyImg,
            imageAlt: 'Illustration of data verification'
        },
        {
            icon: shareLogo,
            title: 'SHARE',
            headline: 'Role-based access for suppliers, retailers, regulators, and consumers',
            colorClass: 'bg-[#F97316]',
            fillColor: '#F97316',
            textClass: 'text-[#F2994A]',
            image: shareImg,
            imageAlt: 'Illustration of data sharing network'
        }
    ];

    const timelineItems = stepsData.map(step => ({
        icon: step.icon,
        iconBgClass: step.colorClass,
        iconClass: 'brightness-0 invert',
        fillColor: step.fillColor,
        content: (
            <>
                <div className="md:flex-[0_0_40%] pt-2.5">
                    <span className={`block font-bold text-sm mb-4 uppercase tracking-wider ${step.textClass}`}>{step.title}</span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0E1624] leading-snug sm:leading-[50px]">{step.headline}</h3>
                </div>
                <div className="flex-1 flex justify-start md:justify-end w-full">
                    <img src={step.image} alt={step.imageAlt} className="w-full md:w-[480px] max-w-full h-auto object-contain" />
                </div>
            </>
        )
    }));

    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="container">
                <div className="text-center max-w-[800px] mx-auto mb-20">
                    <span className="block mb-4 text-[#1E4D8C] font-semibold text-base">How It Works</span>
                    <h2 className="mb-6 text-[2.5rem] text-slate-800 font-bold">Simple 4-Step Implementation Process</h2>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        Trazeit makes end-to-end traceability easy to deploy and effortless to scale. Our streamlined four-step process ensures rapid adoption without disrupting your existing operations.
                    </p>
                </div>

                <AnimatedTimeline items={timelineItems} />
            </div>
        </section>
    );
}

export default ProcessSteps;
