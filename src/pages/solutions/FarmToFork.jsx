import React, { useEffect } from 'react';
import farmImpact1 from '../../assets/images/farm-impact-1.png';
import farmImpact2 from '../../assets/images/farm-impact-2.png';
import farmImpact3 from '../../assets/images/farm-impact-3.png';
import farmImpact4 from '../../assets/images/farm-impact-4.png';
import farmProcessFlow from '../../assets/images/farm-process-flow.png';
import farmFeatures from '../../assets/images/farm-features.png';
import securityCheck from '../../assets/images/security-check-stroke.png';
import FAQ from '../../components/home/FAQ';
import './FarmToFork.css';

const FarmToFork = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="farm-to-fork">

            {/* Track Every Step Section */}
            <div className="section ftf-section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="ftf-heading ftf-heading-large">Track Every Step: From Farm to Consumer Table</h2>

                        {/* Problem Alert Box */}
                        <div className="ftf-problem-alert">
                            <p className="ftf-problem-text">
                                <span className="ftf-problem-label">⚠ Problem:</span> Food journeys through 10+ organizations. One contamination affects products across facilities and countries. Traditional systems take weeks to identify scope, costing millions in recalls and lost trust
                            </p>
                        </div>

                        <h3 className="ftf-subheading ftf-subheading-small">Automated Critical Tracking Events at every step</h3>
                        <p className="ftf-text" style={{ marginBottom: '60px' }}>
                            Automatically capture, validate, and record Critical Tracking Events across every supply chain stage in real time.
                        </p>

                        <div className="ftf-process-flow-container">
                            <img src={farmProcessFlow} alt="Farm to Fork Process Flow" className="ftf-process-image" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Features Section */}
            <div className="section ftf-section ftf-section-light">
                <div className="container">
                    <div className="ftf-features-intro">
                        <h2 className="ftf-subheading">Key Features: Smart, End-to-End Traceability</h2>
                        <p className="ftf-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            Powerful key features designed to deliver real-time visibility, regulatory compliance, and complete product integrity across the food supply chain—from farm origin to consumer scan.
                        </p>
                    </div>

                    <div className="ftf-features-container">
                        <div className="ftf-feature-image-container">
                            <img src={farmFeatures} alt="Smart Traceability Illustration" className="ftf-process-image" />
                        </div>
                        <div className="ftf-feature-list">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                {[
                                    { title: "IoT Cold Chain", text: "Temperature/humidity sensors with alerts" },
                                    { title: "Geolocation Tracking", text: "EUDR-compliant farm coordinates" },
                                    { title: "Parent-Child Batches", text: "Millet lots → finished protein bars" },
                                    { title: "Consumer QR Codes", text: "Verified product passport" },
                                    { title: "Automated Alerts", text: "Shipment deviations, quality failures" }
                                ].map((item, index) => (
                                    <div key={index} className="ftf-feature-item">
                                        <div className="ftf-check-icon-container">
                                            <img src={securityCheck} alt="Check" className="ftf-check-icon" />
                                        </div>
                                        <div>
                                            <h4 className="ftf-feature-title">
                                                {item.title}
                                            </h4>
                                            <p className="ftf-feature-desc">
                                                {item.text}
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
            <div className="section ftf-section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 className="ftf-subheading">Proven, Measurable Impact</h2>
                        <p className="ftf-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            Delivering real business outcomes through end-to-end traceability, automated compliance, and trusted transparency across the food supply chain.
                        </p>
                    </div>

                    <div className="ftf-impact-grid">
                        {[
                            { icon: farmImpact1, percent: "90%", text: "recall time reduction (weeks → hours)" },
                            { icon: farmImpact2, percent: "100%", text: "farm-to-fork traceability" },
                            { icon: farmImpact3, percent: "35%", text: "premium pricing via transparency" },
                            { icon: farmImpact4, percent: "0%", text: "Zero compliance violations in audits" }
                        ].map((item, index) => (
                            <div key={index} className="ftf-impact-card">
                                <img src={item.icon} alt="Icon" className="ftf-impact-icon" />
                                <div>
                                    <div className="ftf-impact-percent">
                                        {item.percent}
                                    </div>
                                    <div className="ftf-impact-text">
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

export default FarmToFork;
