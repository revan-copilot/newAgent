import React, { useEffect } from 'react';
import arrowBtn from '../../assets/images/arrow.svg';
import exportHeroBg from '../../assets/images/export-hero.png';
import exportPremiumImg from '../../assets/images/export-premium.png';
import exportChainImg from '../../assets/images/export-chain.png';
import exportVideoThumb from '../../assets/images/export-video.png';
import complianceStandardsRef from '../../assets/images/compliance-standards-ref.png'; // Using this for the 50+ country section if applicable, or building list manually. 
// Actually image 3 shows a list. I will implement the list in HTML/CSS and use the chain image for the bottom part.
// Checking assets again, I see 'compliance-standards-ref.png'. It might be the list visual if it's an image, or I should build it. 
// Given the user said "images available in assets directory", and 'compliance-standards-ref.png' size is 619kb, it's likely an image of the standards or the whole section.
// However, creating it in HTML is better for quality. I'll check if I can use 'compliance-standards-ref.png' as the right side image for the list section if it contains the frames.
// A simpler approach for the list is HTML.

import resultIcon1 from '../../assets/images/export-1.png';
import resultIcon2 from '../../assets/images/export-2.png';
import resultIcon3 from '../../assets/images/export-3.png';
import resultIcon4 from '../../assets/images/export-4.png';

import FAQ from '../../components/home/FAQ';
import VideoSection from '../../components/industries/VideoSection';
import ResultsDelivered from '../../components/industries/ResultsDelivered';
import './ForExporters.css';

const ForExporters = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="for-exporters">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background" style={{ backgroundImage: `url(${exportHeroBg})` }}></div>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <h1>Expand Markets with Certified Compliance and Verified Authenticity</h1>
                        <p className="hero-subtitle">
                            5-7 day customs delays. Export rejections from documentation gaps. FSMA 204 deadline Dec 2026. Multi-country compliance chaos.
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

            {/* Results Delivered Section */}
            <ResultsDelivered
                title="Results Delivered"
                subtext="Track measurable outcomes with TRAZEIT: faster recall response, reduced rejections, supplier compliance, and end-to-end traceability—all driving tangible business impact."
                data={[
                    { icon: resultIcon1, metric: "85%", label: "Customs: 5 days → <1 day" },
                    { icon: resultIcon2, metric: "2", label: "Documentation Cut from 2 Days to Hours" },
                    { icon: resultIcon3, metric: "+3", label: "Access to New Countries in 6 Months" },
                    { icon: resultIcon4, metric: "+40%", label: "Revenue from exports" }
                ]}
            />

            {/* Premium Export Intelligence Section */}
            <div className="section fe-section">
                <div className="container">
                    <div className="fe-features-grid">
                        <div className="fe-features-left">
                            <h2 className="fe-heading">Premium Export Intelligence</h2>
                            <p className="fe-text">
                                Advanced automation that keeps you compliant, globally ready, and protected—without manual effort or delays
                            </p>
                            <div className="fe-feature-list">
                                <div className="fe-feature-item">
                                    <div className="fe-check-icon">🛡️</div>
                                    <div>
                                        <h4>Real-time regulation monitoring</h4>
                                        <p>Automated compliance, global-ready documentation, and built-in product authenticity—handled in real time.</p>
                                    </div>
                                </div>
                                <div className="fe-feature-item">
                                    <div className="fe-check-icon">🛡️</div>
                                    <div>
                                        <h4>Multi-language documentation</h4>
                                        <p>Real-time compliance, global documentation, and verified product authenticity.</p>
                                    </div>
                                </div>
                                <div className="fe-feature-item">
                                    <div className="fe-check-icon">🛡️</div>
                                    <div>
                                        <h4>Phytosanitary auto-generation</h4>
                                        <p>Stay export-ready with live regulations, automated certificates, and anti-counterfeit protection.</p>
                                    </div>
                                </div>
                                <div className="fe-feature-item">
                                    <div className="fe-check-icon">🛡️</div>
                                    <div>
                                        <h4>Anti-counterfeiting verification</h4>
                                        <p>One platform for live regulatory intelligence, automated certifications, and secure product verification.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fe-features-right">
                            <img src={exportPremiumImg} alt="Premium Export Intelligence" className="fe-feature-image" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 50+ Country Compliance Section */}
            <div className="section fe-section fe-section-light">
                <div className="container">
                    <div className="fe-compliance-grid">
                        <div className="fe-compliance-left">
                            <h2 className="fe-heading">50+ Country Compliance Frameworks</h2>
                            <p className="fe-text">
                                Meet global regulatory requirements with built-in compliance for the USA, EU, India, and more—powered by standardized, audit-ready traceability
                            </p>
                        </div>
                        <div className="fe-compliance-right">
                            <ul className="fe-country-list">
                                <li className="fe-country-item">
                                    <span className="fe-flag">🇺🇸</span> <strong>USA:</strong> FSMA 204 lot codes + FDA reports
                                </li>
                                <li className="fe-country-item">
                                    <span className="fe-flag">🇪🇺</span> <strong>EU:</strong> ISO 22005 + EUDR geolocation 📍
                                </li>
                                <li className="fe-country-item">
                                    <span className="fe-flag">🇮🇳</span> <strong>India:</strong> FSSAI licensing + export certifications 📄
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Compliance Process Flow Image */}
                    <div className="fe-process-container">
                        <img src={exportChainImg} alt="Export Compliance Process" className="fe-process-image" />
                    </div>
                </div>
            </div>

            {/* Manufacturer in Action (Video) Section */}
            <VideoSection
                title="From Farm to Export—Fully Verified"
                thumbnail={exportVideoThumb}
                caption="See how TRAZEIT delivers real-time compliance, automated documentation, and product authenticity in one seamless export flow."
            />

            {/* FAQ Section */}
            <FAQ />
        </div>
    );
};

export default ForExporters;
