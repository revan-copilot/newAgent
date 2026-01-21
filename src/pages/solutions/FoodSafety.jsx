import React, { useEffect } from 'react';
import foodSafetyHero from '../../assets/images/food-safety-hero.png';
import foodSafetyFeatures from '../../assets/images/food-safety-features.png';
import foodSafety1 from '../../assets/images/food-safety-1.png'; // 85%
import foodSafety2 from '../../assets/images/food-safety-2.png'; // 100%
import foodSafety3 from '../../assets/images/food-safety-3.png'; // 60%
import foodSafety4 from '../../assets/images/food-safety-4.png'; // 0%
import securityCheck from '../../assets/images/security-check-stroke.png';
import FAQ from '../../components/home/FAQ';
import './FoodSafety.css';

const FoodSafety = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Recall Readiness Score",
            text: "Pre-calculated for every batch"
        },
        {
            title: "Scenario Modeling",
            text: "What if Supplier X fails?"
        },
        {
            title: "Regulatory Templates",
            text: "FDA, FSSAI, EU formatted notifications"
        }
    ];

    const impacts = [
        {
            icon: foodSafety1,
            percent: "85%",
            text: "Recall notification reduction (3 days → 8 minutes)"
        },
        {
            icon: foodSafety2,
            percent: "100%",
            text: "Maintained consumer trust through rapid response"
        },
        {
            icon: foodSafety3,
            percent: "60%",
            text: "Product loss prevention"
        },
        {
            icon: foodSafety4,
            percent: "0%",
            text: "Zero regulatory penalties"
        }
    ];

    return (
        <div className="food-safety">
            {/* Hero Section */}
            <div className="section fs-section-light">
                <div className="container">
                    <h1 className="fs-heading">
                        Turn Food Safety Crises into Minutes, Not Weeks
                    </h1>
                    <p className="fs-text fs-text-hero">
                        $2.6M average recall cost. 3-4 weeks to identify scope. 60% product loss from delayed response. Manual batch hunting across Excel sheets, emails, paper records fails regulators and
                    </p>
                    <div className="fs-hero-diagram-container">
                        <img src={foodSafetyHero} alt="From Incident to Isolation - 8 Minutes" className="fs-hero-image" />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="section fs-section">
                <div className="container">
                    <div className="fs-features-container">
                        {/* Left Image */}
                        <div className="fs-feature-image-container">
                            <img
                                src={foodSafetyFeatures}
                                alt="Batch Relationship Mapping & Recall Readiness"
                                className="fs-feature-image"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="fs-feature-list">
                            <h2 className="fs-subheading">Key Features</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                {features.map((feature, index) => (
                                    <div key={index} className="fs-feature-item">
                                        <div className="fs-check-icon-container">
                                            <img src={securityCheck} alt="Check" className="fs-check-icon" />
                                        </div>
                                        <div>
                                            <h4 className="fs-feature-title">
                                                {feature.title}
                                            </h4>
                                            <p className="fs-feature-desc">
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
            <div className="section fs-section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 className="fs-subheading">Proven Results</h2>
                        <p className="fs-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            Measurable outcomes with faster recalls, zero audit gaps, improved operational efficiency, and increased brand trust through verified traceability
                        </p>
                    </div>

                    <div className="fs-impact-grid">
                        {impacts.map((item, index) => (
                            <div key={index} className="fs-impact-card">
                                <img src={item.icon} alt="Impact Icon" className="fs-impact-icon" />
                                <div className="fs-impact-content">
                                    <div className="fs-impact-percent">
                                        {item.percent}
                                    </div>
                                    <div className="fs-impact-text">
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

export default FoodSafety;
