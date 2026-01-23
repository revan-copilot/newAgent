import heroBg from '../../assets/images/hero_background.png';
import arrowBtn from '../../assets/images/arrow.svg';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}></div>
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="hero-content">
                    <h1>
                        End-to-End Food Traceability,<br />
                        Powered by Blockchain. Built for<br />
                        Compliance, Designed for Growth
                    </h1>
                    <p className="hero-subtitle">
                        TRAZEIT empowers food manufacturers, exporters, and retailers to achieve complete supply chain visibility, meet global regulations, and build consumer trust—all on a single, secure blockchain-powered platform. Track from farm to fork in seconds, not weeks.
                    </p>
                    <div className="hero-cta">
                        <button className="btn btn-gold">Request a Demo</button>
                        <button className="btn btn-outline-white">
                            <img src={arrowBtn} alt="Play" className="play-icon-img" />
                            Watch 2-Min Demo Video
                        </button>
                        <a href="#solutions" className="hero-link">Explore Solutions</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
