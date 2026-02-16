import React, { useEffect } from 'react';
import platformHero from '../assets/images/platform-hero.png';
import platformVisibility from '../assets/images/platform-visibility.png';
import platformVisibilityBg from '../assets/images/platform-visibility-background.png';
import platformBlockchain from '../assets/images/platform-blockchain.png';
import platformCompliance from '../assets/images/trace-compilance-engine.png';
import platformSecurity from '../assets/images/platform-security.png';
import securityCheck from '../assets/images/security-check-stroke.png';
import FeatureSplitSection from '../components/common/FeatureSplitSection';
import FAQ from '../components/home/FAQ';
import './Trace.css';

const PlatformOverview = () => {
    const traceFaqs = [
        {
            question: 'Can TRAZEIT integrate with SAP/Oracle?',
            answer: 'Yes. Full REST API, webhook support, and pre-built connectors for SAP, Oracle NetSuite, and 20+ ERP/warehouse systems ensure seamless data flow across your existing enterprise architecture.'
        },
        {
            question: 'What devices work for data capture?',
            answer: 'Capture data on any device—smartphones (iOS/Android), warehouse scanners, Bluetooth scales, and IoT sensors. Our app works offline and syncs automatically when reconnected.'
        },
        {
            question: 'How secure is the blockchain data?',
            answer: 'All data is encrypted via military-grade AWS KMS and anchored to an immutable blockchain. Private channels ensure you control exactly who sees what, with a permanent cryptographic audit trail.'
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const ComparisonIcon = ({ type }) => {
        if (type === 'check') return <img src={securityCheck} alt="Yes" className="po-check-icon" />;
        if (type === 'x') return <div className="po-icon-circle po-x-circle">✕</div>;
        return null;
    };

    const FeatureList = ({ items }) => (
        <div>
            {items.map((item, index) => (
                <div key={index} className="po-check-item">
                    <img src={securityCheck} alt="Check" className="po-check-icon" />
                    <div>
                        <div className="po-check-title">{item.title}</div>
                        <div className="po-check-text">{item.text}</div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="platform-overview">
            {/* Hero Section */}
            <div className="section section-light po-section-light">
                <div className="container">
                    <h1 className="po-heading po-heading-large">
                        One Unified Platform. Complete Food<br />Traceability. Global Compliance
                    </h1>
                    <p className="po-text po-hero-text">
                        A single, blockchain-powered platform that connects every stakeholder across the food supply chain. Achieve end-to-end traceability, real-time visibility, and compliance with global food safety regulations—without complexity
                    </p>
                    <div className="po-hero-image-container">
                        <img
                            src={platformHero}
                            alt="Unified Platform Diagram"
                            className="po-hero-image"
                        />
                    </div>
                </div>
            </div>

            {/* Complete End-to-End Visibility */}
            <FeatureSplitSection
                heading="Complete End-to-End Visibility"
                text="Gain real-time visibility across every stage of the food supply chain—from source to shelf. Track batches, movements, and events seamlessly to eliminate blind spots and data silos."
                image={platformVisibility}
                imageAlt="End-to-End Visibility Process"
                imageBg={platformVisibilityBg}
                sectionClass="po-section"
                contentClass="po-feature-content"
                imageContainerClass="po-feature-image-container"
                imageClass="po-feature-image"
                headingClass="po-subheading"
                textClass="po-text"
            >
                <FeatureList items={[
                    { title: "Real-Time CTE Tracking", text: "Every Critical Tracking Event from farm receipt to consumer scan" },
                    { title: "Multi-Stakeholder Portals", text: "Suppliers, manufacturers, retailers, regulators, consumers" },
                    { title: "Single Source of Truth", text: "Eliminate Excel chaos and conflicting records" },
                    { title: "Instant Recall Scope", text: "See affected customers, locations, inventory in seconds" }
                ]} />
            </FeatureSplitSection>

            {/* Automated Compliance Engine */}
            <FeatureSplitSection
                heading="Automated Compliance Engine"
                text="Automatically validate data against global food safety and regulatory standards. Reduce manual checks, eliminate errors, and stay audit-ready at every step of the supply chain"
                image={platformCompliance}
                imageAlt="Compliance Dashboard"
                imageBg={platformVisibilityBg}
                sectionClass="po-section"
                contentClass="po-feature-content"
                imageContainerClass="po-feature-image-container"
                imageClass="po-feature-image"
                headingClass="po-subheading"
                textClass="po-text"
            >
                <FeatureList items={[
                    { title: "Pre-Built Frameworks", text: "FSMA 204, ISO 22005, GS1, EUDR ready" },
                    { title: "One-Click Audit Reports", text: "Inspection-ready documentation instantly" },
                    { title: "Smart Compliance Rules", text: "Prevents non-compliant data entry" },
                    { title: "Regulatory Alerts", text: "Deadlines, requirement changes monitored automatically" }
                ]} />
            </FeatureSplitSection>

            {/* Enterprise Security */}
            <FeatureSplitSection
                heading="Enterprise Security"
                text="Automatically validate data against global food safety and regulatory standards. Reduce manual checks, eliminate errors, and stay audit-ready at every step of the supply chain"
                image={platformSecurity}
                imageAlt="Enterprise Security Shield"
                sectionClass="section"
                contentClass="po-feature-content"
                imageContainerClass="po-feature-image-container"
                imageClass="po-feature-image"
                headingClass="po-subheading"
                textClass="po-text"
            >
                <FeatureList items={[
                    { title: "Hyperledger Fabric Blockchain", text: "Cryptographic immutability" },
                    { title: "SOC 2 Type II | ISO 27001", text: "Enterprise compliance" },
                    { title: "Role-Based Access", text: "Granular permissions per stakeholder" },
                    { title: "AWS Enterprise Encryption", text: "Military-grade data protection" }
                ]} />
            </FeatureSplitSection>

            {/* Blockchain ensures Food Safety (Now Last) */}
            <div className="section">
                <div className="container">
                    <div className="po-blockchain-container">
                        <h2 className="po-subheading">How Our Blockchain Ensures Food Safety</h2>
                        <p className="po-text">Our blockchain securely records every critical food event in real time, creating tamper-proof, verifiable data that ensures transparency, accountability, and food safety across the supply chain.</p>

                        <div className="po-blockchain-image-container">
                            <img src={platformBlockchain} alt="Blockchain Process Flow" className="po-feature-image" />
                        </div>

                        {/* Comparison Table */}
                        <div className="po-table-container">
                            <table className="po-table">
                                <thead>
                                    <tr>
                                        <th className="po-th">FEATURE</th>
                                        <th className="po-th po-th-center">TRAZEIT</th>
                                        <th className="po-th po-th-center">ERP SYSTEMS</th>
                                        <th className="po-th po-th-center">LEGACY TRACEABILITY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { feature: 'Blockchain Native', trazeit: 'check', erp: 'x', legacy: 'x' },
                                        { feature: 'FSMA 204 Ready', trazeit: 'check', erp: 'x', legacy: 'Partial' },
                                        { feature: 'Multi-Party Access', trazeit: 'check', erp: 'x', legacy: 'Manual' },
                                        { feature: 'Recall Speed', trazeit: 'Minutes', erp: 'Days', legacy: 'Weeks' },
                                        { feature: 'Compliance Automation', trazeit: 'check', erp: 'Manual', legacy: 'Gaps' }
                                    ].map((row, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'po-row-even' : 'po-row-odd'}>
                                            <td className="po-td po-td-feature">{row.feature}</td>
                                            <td className="po-td po-td-center"><div className="po-td-content-center">{row.trazeit === 'check' || row.trazeit === 'x' ? <ComparisonIcon type={row.trazeit} /> : row.trazeit}</div></td>
                                            <td className="po-td po-td-center"><div className="po-td-content-center">{row.erp === 'check' || row.erp === 'x' ? <ComparisonIcon type={row.erp} /> : <span className="po-text-muted">{row.erp}</span>}</div></td>
                                            <td className="po-td po-td-center"><div className="po-td-content-center">{row.legacy === 'check' || row.legacy === 'x' ? <ComparisonIcon type={row.legacy} /> : <span className="po-text-muted">{row.legacy}</span>}</div></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ items={traceFaqs} />
        </div>
    );
};

export default PlatformOverview;
