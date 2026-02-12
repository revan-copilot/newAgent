import heroBg from '../../assets/images/hero_background.png';
import arrowBtn from '../../assets/images/arrow.svg';

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-[120px] px-4 sm:pt-[150px] sm:pb-[100px] sm:px-5">
            <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat w-full h-full" style={{ backgroundImage: `url(${heroBg})` }}></div>
            <div className="absolute inset-0 bg-black/60 z-[1]"></div>
            <div className="container relative z-[2] text-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-white font-[Lateef] font-medium mb-7 max-w-6xl -tracking-[0.01em] text-[2rem] leading-[1.2] sm:text-[2.75rem] sm:leading-[1.1] lg:text-[106px] lg:leading-[91px]">
                        End-to-End Food Traceability, Powered by Blockchain. Built for Compliance, Designed for Growth
                    </h1>
                    <p className="text-white font-[Inter] font-normal mb-12 text-base leading-6 sm:text-[20px] sm:leading-[30px] lg:text-[23px] lg:leading-[34px]">
                        TRAZEIT empowers food manufacturers, exporters, and retailers to achieve complete supply chain visibility, meet global regulations, and build consumer trust—all on a single, secure blockchain-powered platform. Track from farm to fork in seconds, not weeks.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 flex-wrap justify-center items-center w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-6 py-3 text-base font-medium text-white bg-[#1E4D8C] rounded-sm transition-all duration-200 hover:bg-[#163A6B] hover:-translate-y-[1px] hover:shadow-lg">Request a Demo</button>
                        <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-transparent border border-white rounded-sm transition-all duration-200 hover:bg-white hover:text-dark-bg">
                            <img src={arrowBtn} alt="Play" className="w-[18px] h-[18px] transition-all duration-200 group-hover:brightness-0" />
                            Watch 2-Min Demo Video
                        </button>
                        <a href="#solutions" className="text-base font-medium text-white opacity-90 transition-opacity p-3 hover:opacity-100 hover:underline mt-2 sm:mt-0">Explore Solutions</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
