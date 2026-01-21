import React, { useEffect } from 'react';
import transparencyHero from '../../assets/images/transparency-hero.png';
import transparency1 from '../../assets/images/transparency-1.png'; // +35%
import transparency2 from '../../assets/images/transparency-2.png'; // 2x
import transparency3 from '../../assets/images/transparency-3.png'; // 85%
import transparency4 from '../../assets/images/transparency-4.png'; // 0%
import securityCheck from '../../assets/images/security-check-stroke.png';
import FAQ from '../../components/home/FAQ';
import './BrandTransparency.css';

const BrandTransparency = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Digital Product Passport",
            text: "Interactive supply chain journey"
        },
        {
            title: "Sustainability Metrics",
            text: "Water usage, carbon footprint, fair-trade"
        },
        {
            title: "Certification Verification",
            text: "Live links to ISO, organic certs"
        },
        {
            title: "Multi-Language Support",
            text: "50+ languages for global consumers"
        },
        {
            title: "Counterfeit Protection",
            text: "Blockchain prevents fake QR codes"
        }
    ];

    const impacts = [
        {
            icon: transparency1,
            percent: "+35%",
            text: "premium pricing (transparency justified)"
        },
        {
            icon: transparency2,
            percent: "2x",
            text: "QR scan rates vs. static info"
        },
        {
            icon: transparency3,
            percent: "85%",
            text: "improved brand perception"
        },
        {
            icon: transparency4,
            percent: "0%",
            text: "Zero counterfeit issues"
        }
    ];

    return (
        <div className="brand-transparency">
            {/* Hero Section */}
            <div className="section bt-section-light">
                <div className="container">
                    <h1 className="bt-heading">
                        Give Consumers the Transparency They Demand
                    </h1>
                    <p className="bt-text bt-text-hero">
                        78% scan QR codes for origin info. 65% pay premium for transparent brands. Opaque supply chains = social media backlash, lost loyalty
                    </p>
                </div>
            </div>

            {/* Consumer Portal Section */}
            <div className="section bt-section">
                <div className="container">
                    <div className="bt-consumer-container">
                        {/* Left Image */}
                        <div className="bt-consumer-image-container">
                            <img
                                src={transparencyHero}
                                alt="TRAZEIT Consumer Portal"
                                className="bt-consumer-image"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="bt-consumer-content">
                            <h2 className="bt-subheading">TRAZEIT Consumer Portal</h2>
                            <p className="bt-text" style={{ marginBottom: '40px' }}>
                                QR Scan → Verified Product Passport
                            </p>

                            <h3 className="bt-feature-title" style={{ fontSize: '24px', marginBottom: '24px' }}>Key Features</h3>

                            <div className="bt-feature-list">
                                {features.map((feature, index) => (
                                    <div key={index} className="bt-feature-item">
                                        <div className="bt-check-icon-container">
                                            <img src={securityCheck} alt="Check" className="bt-check-icon" />
                                        </div>
                                        <div>
                                            <h4 className="bt-feature-title">
                                                {feature.title}
                                            </h4>
                                            <p className="bt-feature-desc">
                                                {feature.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact Section */}
            <div className="section bt-section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 className="bt-subheading">Business Impact</h2>
                        <p className="bt-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            Lower risk, faster recalls, reduced compliance costs, and increased revenue through trusted end-to-end traceability.
                        </p>
                    </div>

                    <div className="bt-impact-grid">
                        {impacts.map((item, index) => (
                            <div key={index} className="bt-impact-card">
                                <img src={item.icon} alt="Impact Icon" className="bt-impact-icon" />
                                <div className="bt-impact-content">
                                    <div className="bt-impact-percent">
                                        {item.percent}
                                    </div>
                                    <div className="bt-impact-text">
                                        {item.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ />
        </div>
    );
};

export default BrandTransparency;
