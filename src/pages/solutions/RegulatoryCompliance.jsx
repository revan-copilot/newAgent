import React, { useEffect } from 'react';
import platformCompliance from '../../assets/images/platform-compliance.png';
import complianceAssessment from '../../assets/images/regulartory-compliance-2.png';
import logoISO from '../../assets/images/logo-ISO.png';
import logoFSMA from '../../assets/images/logo_fsma204.png';
import logoEUDR from '../../assets/images/logo_eu_dr.png';
import logoGS1 from '../../assets/images/logo_gs1.png';
import securityCheck from '../../assets/images/security-check-stroke.png';
import FAQ from '../../components/home/FAQ';
import './RegulatoryCompliance.css';

const RegulatoryCompliance = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const standards = [
        {
            logo: logoISO,
            title: "ISO 22005:2007",
            checks: ["Pre-built CTE templates", "KDE capture automation", "One-step-back/forward traceability", "Automatic system documentation"]
        },
        {
            logo: logoFSMA,
            title: "FSMA 204 Ready (Dec 2026)",
            checks: ["FDA report formats", "Supplier/customer linkage", "20-minute traceability guarantee", "Automated lot code assignment"]
        },
        {
            logo: logoEUDR,
            title: "EUDR Deforestation-Free",
            checks: ["Farm geolocation capture", "Risk scoring by region", "Compliance declarations", "Satellite data integration"]
        },
        {
            logo: logoGS1,
            title: "GS1 Standards",
            checks: ["GTIN validation", "GLN facility codes", "SSCC shipment tracking", "Digital Link QR codes"]
        }
    ];

    return (
        <div className="regulatory-compliance">
            {/* Hero Section */}
            <div className="section rc-section-light">
                <div className="container">
                    <h1 className="rc-heading rc-heading-hero">
                        Meet Global Food Safety Standards Automatically
                    </h1>
                    <p className="rc-text rc-text-hero">
                        78% of food exporters face documentation gaps. $2.6M average recall cost. Manual compliance = errors, delays, market exclusion
                    </p>
                </div>
            </div>

            {/* Compliance Engine & Standards Section */}
            <div className="section rc-section">
                <div className="container">
                    <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>

                        {/* Left: Diagram */}
                        <div className="rc-diagram-container">
                            <div className="rc-diagram-box">
                                <img
                                    src={platformCompliance}
                                    alt="TRAZEIT Compliance Engine Diagram"
                                    className="rc-diagram-image"
                                />
                            </div>
                        </div>

                        {/* Right: Standards Grid */}
                        <div className="rc-standards-container">
                            <h2 className="rc-subheading" style={{ marginBottom: '16px' }}>TRAZEIT Compliance Engine</h2>
                            <p className="rc-text" style={{ marginBottom: '60px' }}>
                                Powerful key features designed to deliver real-time visibility, regulatory compliance, and complete product integrity across the food supply chain—from farm origin to consumer scan.
                            </p>

                            <div className="rc-standards-grid">
                                {standards.map((std, index) => (
                                    <div key={index} className="rc-standard-card">
                                        <div className="rc-standard-logo-container">
                                            <img src={std.logo} alt={std.title} className="rc-standard-logo" />
                                        </div>
                                        <h4 className="rc-standard-title">{std.title}</h4>
                                        <div>
                                            {std.checks.map((check, idx) => (
                                                <div key={idx} className="rc-check-item">
                                                    <img src={securityCheck} alt="check" className="rc-check-icon" />
                                                    <span className="rc-check-text">{check}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Assessment Banner Section */}
            <div className="section rc-section">
                <div className="container">
                    <div className="rc-assessment-banner">
                        {/* Left Content */}
                        <div className="rc-assessment-content">
                            <h2 className="rc-assessment-heading">
                                Assess your gaps in 2 minutes
                            </h2>
                            <p className="rc-assessment-text">
                                Quickly assess your compliance readiness in just 2 minutes with our free interactive checklist. Identify gaps instantly and download a personalized roadmap to meet regulatory and traceability requirements with confidence.
                            </p>
                            <button className="rc-assessment-button">
                                Download personalized roadmap →
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="rc-assessment-image-container">
                            <img
                                src={complianceAssessment}
                                alt="Assessment Checklist"
                                className="rc-assessment-image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ />
        </div>
    );
};

export default RegulatoryCompliance;
