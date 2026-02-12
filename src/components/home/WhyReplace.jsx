import illustrationImg from '../../assets/images/why_trazeit_illustration.png';
import platformVisibilityBg from '../../assets/images/platform-visibility-background.png';

function WhyReplace() {
    return (
        <section id="solutions" className="py-24 lg:py-32 bg-white">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="text-center lg:text-left">
                        <h2 className="text-[1.75rem] lg:text-4xl font-semibold text-[#0E1624] mb-12 lg:mb-20 leading-[1.3] lg:leading-[50px] max-w-2xl mx-auto lg:mx-0">
                            Why TRAZEIT Outperforms<br />Traditional Traceability Systems
                        </h2>

                        <div className="text-center lg:text-left">
                            <h3 className="text-[28px] font-semibold text-[#0E1624] mb-4">Complete Visibility</h3>
                            <p className="text-[#475569] leading-7 text-xl">
                                Real-time tracking from farm to consumer creates a single source of truth across all supply chain partners. Achieve instant batch-level traceability in seconds versus weeks with legacy systems. Eliminate data silos and conflicting records forever
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-10 bg-no-repeat bg-contain bg-center order-first lg:order-last mx-auto max-w-[500px] lg:max-w-none w-full" style={{
                        backgroundImage: `url(${platformVisibilityBg})`
                    }}>
                        <img src={illustrationImg} alt="Trazeit Supply Chain Network" className="max-w-full h-auto rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyReplace;
