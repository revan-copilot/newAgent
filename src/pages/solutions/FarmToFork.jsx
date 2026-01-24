import React, { useEffect } from 'react';
import SolutionFeatures from '../../components/solutions/SolutionFeatures';
import SolutionResults from '../../components/solutions/SolutionResults';
import FAQ from '../../components/home/FAQ';
import farmImpact1 from '../../assets/images/farm-impact-1.png';
import farmImpact2 from '../../assets/images/farm-impact-2.png';
import farmImpact3 from '../../assets/images/farm-impact-3.png';
import farmImpact4 from '../../assets/images/farm-impact-4.png';
import farmProcessFlow from '../../assets/images/farm-process-flow.png';
import farmFeatures from '../../assets/images/farm-features.png';
import '../../components/solutions/Solutions.css';
import './FarmToFork.css';

const FarmToFork = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        { title: "IoT Cold Chain", text: "Temperature/humidity sensors with alerts" },
        { title: "Geolocation Tracking", text: "EUDR-compliant farm coordinates" },
        { title: "Parent-Child Batches", text: "Millet lots → finished protein bars" },
        { title: "Consumer QR Codes", text: "Verified product passport" },
        { title: "Automated Alerts", text: "Shipment deviations, quality failures" }
    ];

    const impactsData = [
        { icon: farmImpact1, metric: "90%", label: "Recall time reduction (weeks → hours)" },
        { icon: farmImpact2, metric: "100%", label: "Farm-to-fork traceability" },
        { icon: farmImpact3, metric: "35%", label: "Premium pricing via transparency" },
        { icon: farmImpact4, metric: "0%", label: "Zero compliance violations in audits" }
    ];

    return (
        <div className="farm-to-fork">
            {/* Custom Hero with Problem Alert & Process Flow */}
            <div className="sol-section-white">
                <div className="container">
                    <div className="sol-hero">
                        <h1 className="sol-hero-title">Track Every Step: From Farm to Consumer Table</h1>

                        {/* Problem Alert Box */}
                        <div className="ftf-problem-alert">
                            <p className="ftf-problem-text">
                                <span className="ftf-problem-label">⚠ Problem:</span> Food journeys through 10+ organizations. One contamination affects products across facilities and countries. Traditional systems take weeks to identify scope, costing millions in recalls and lost trust
                            </p>
                        </div>

                        <h3 className="ftf-subheading ftf-subheading-small">Automated Critical Tracking Events at every step</h3>
                        <p className="sol-hero-subtitle" style={{ marginBottom: '60px' }}>
                            Automatically capture, validate, and record Critical Tracking Events across every supply chain stage in real time.
                        </p>

                        <div className="ftf-process-flow-container">
                            <img src={farmProcessFlow} alt="Farm to Fork Process Flow" className="ftf-process-image" />
                        </div>
                    </div>
                </div>
            </div>

            <SolutionFeatures
                image={farmFeatures}
                imageAlt="Smart Traceability Illustration"
                heading="Key Features: Smart, End-to-End Traceability"
                subtitle="Powerful key features designed to deliver real-time visibility, regulatory compliance, and complete product integrity across the food supply chain—from farm origin to consumer scan."
                features={features}
            />

            <SolutionResults
                title="Proven, Measurable Impact"
                subtitle="Delivering real business outcomes through end-to-end traceability, automated compliance, and trusted transparency across the food supply chain."
                data={impactsData}
            />

            <FAQ />
        </div>
    );
};

export default FarmToFork;
