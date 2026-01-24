import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import retailVideoThumb from '../../assets/images/retail-video.png';
import retailPremiumComponents from '../../assets/images/retail-premium.png';
import retailProcessFlow from '../../assets/images/retail-chain.png';
import retailHeroBg from '../../assets/images/retail-hero.png';
import arrowBtn from '../../assets/images/arrow.svg';
import securityCheck from '../../assets/images/security-check-stroke.png';
import resultIcon1 from '../../assets/images/retail-1.png';
import resultIcon2 from '../../assets/images/retail-2.png';
import resultIcon3 from '../../assets/images/retail-3.png';
import resultIcon4 from '../../assets/images/retail-4.png';
import VideoSection from '../../components/industries/VideoSection';
import SolutionResults from '../../components/solutions/SolutionResults';
import FAQ from '../../components/home/FAQ'; // Importing FAQ from correct location
import './ForRetailers.css';

const ForRetailers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="for-retailers">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background" style={{ backgroundImage: `url(${retailHeroBg})` }}></div>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <h1>Assure Your Customers: Complete Supply Chain Transparency</h1>
                        <p className="hero-subtitle">
                            Supplier verification taking weeks. Private label recalls across 200+ stores. Consumers demanding origin proof via QR. Regulatory complexity
                        </p>
                        <div className="hero-cta">
                            <button className="btn btn-gold">Request a Demo</button>
                            <button className="btn btn-outline-white">
                                <img src={arrowBtn} alt="Play" className="play-icon-img" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                                Watch 2-Min Demo Video
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Flow Image (Store-to-Farm Transparency) */}
            <div className="section fr-section">
                <div className="container">
                    <h2 className="fr-heading-center">Store-to-Farm Transparency</h2>
                    <p className="fr-text text-center" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
                        Track every step from store shelves back to the farm. Ensure complete visibility across the supply chain, building trust with consumers and stakeholders.
                    </p>
                    <div className="fr-process-flow-container">
                        <img src={retailProcessFlow} alt="Store to Farm Transparency Process Flow" className="fr-process-image" />
                    </div>
                </div>
            </div>

            {/* Core Platform Features (Premium Export Intelligence) */}
            <div className="section fr-section fr-section-light">
                <div className="container">
                    <div className="fr-features-grid">
                        <div className="fr-features-left">
                            <h2 className="fr-heading">Premium Export Intelligence</h2>
                            <p className="fr-text">
                                Advanced automation that keeps you compliant, globally ready, and protected—without manual effort or delays
                            </p>
                            <div className="fr-feature-items">
                                <div className="fr-feature-item">
                                    <div className="fr-check-icon">
                                        <img src={securityCheck} alt="Check" />
                                    </div>
                                    <div>
                                        <h4>Supplier Dashboard</h4>
                                        <p>Real-time compliance/quality scores</p>
                                    </div>
                                </div>
                                <div className="fr-feature-item">
                                    <div className="fr-check-icon">
                                        <img src={securityCheck} alt="Check" />
                                    </div>
                                    <div>
                                        <h4>Private Label Control</h4>
                                        <p>Enforce manufacturer standards</p>
                                    </div>
                                </div>
                                <div className="fr-feature-item">
                                    <div className="fr-check-icon">
                                        <img src={securityCheck} alt="Check" />
                                    </div>
                                    <div>
                                        <h4>Consumer QR Generation</h4>
                                        <p>GS1 Digital Link ready</p>
                                    </div>
                                </div>
                                <div className="fr-feature-item">
                                    <div className="fr-check-icon">
                                        <img src={securityCheck} alt="Check" />
                                    </div>
                                    <div>
                                        <h4>Store-Level Tracking</h4>
                                        <p>Shelf placement to recall execution</p>
                                    </div>
                                </div>
                                <div className="fr-feature-item">
                                    <div className="fr-check-icon">
                                        <img src={securityCheck} alt="Check" />
                                    </div>
                                    <div>
                                        <h4>Rapid Recall</h4>
                                        <p>Affected stores identified in minutes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fr-features-right">
                            <div className="fr-app-image-container">
                                <img src={retailPremiumComponents} alt="Retail Intelligence Dashboard" className="fr-app-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Retailer in Action Section (Video) */}
            <VideoSection
                title="Industries We Serve – Retail Solutions"
                thumbnail={retailVideoThumb}
                caption="Discover how our platform empowers retailers with real-time product traceability, compliance assurance, and enhanced supply chain visibility—ensuring quality from supplier to shelf."
            />

            {/* Results Delivered Section */}
            <SolutionResults
                title="Results Delivered"
                subtitle="Track measurable outcomes with TRAZEIT: faster recall response, reduced rejections, supplier compliance, and end-to-end traceability—all driving tangible business impact."
                data={[
                    { icon: resultIcon1, metric: "95%", label: "Supplier compliance" },
                    { icon: resultIcon2, metric: "8", label: "Recall execution minutes" },
                    { icon: resultIcon3, metric: "25%", label: "QR engagement scan rate" },
                    { icon: resultIcon4, metric: "98%", label: "Private label quality" }
                ]}
            />

            {/* FAQ Section */}
            <FAQ />
        </div>
    );
};

export default ForRetailers;
