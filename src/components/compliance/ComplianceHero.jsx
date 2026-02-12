import { useEffect } from 'react';
import heroImage from '../../assets/images/global-food-compilance.png';

function ComplianceHero() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section section-light pt-32 lg:pt-40">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="flex-1 max-w-xl">
                        <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-[1.15] font-bold text-text-dark mb-6">
                            Your Complete Global Food Compliance Resource Center
                        </h1>
                        <p className="text-text-gray text-base sm:text-lg leading-relaxed mb-8">
                            78% of food companies fail first compliance audit. $1.2M average certification cost. 6-12 months manual documentation. TRAZEIT automates everything
                        </p>
                        <a
                            href="#contact"
                            className="btn btn-primary inline-flex items-center gap-2"
                        >
                            Contact Us <span>→</span>
                        </a>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <img
                            src={heroImage}
                            alt="Global Food Compliance"
                            className="w-full max-w-[520px] rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ComplianceHero;
