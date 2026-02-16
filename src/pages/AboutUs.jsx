import React, { useEffect } from 'react';
import aboutHeroImage from '../assets/images/about-hero.png';
import logoIso from '../assets/images/logo-ISO.png';
import logoGs1 from '../assets/images/logo_gs1.png';
import logoEu from '../assets/images/eudr-logo.png';
import logoFsma from '../assets/images/fsma-logo.png';
import aboutFoodIndustry from '../assets/images/about-food-industry.png';
import trazeitLogoBlue from '../assets/images/trazeit-logo-blue.png';
import aboutRedefiningTrust from '../assets/images/about-redefining-trust.png';
import logoFssai from '../assets/images/FSSAI_logo.png';
import securityCheck from '../assets/images/security-check-stroke.png';
import platformVisibilityBg from '../assets/images/platform-visibility-background.png';
import FeatureSplitSection from '../components/common/FeatureSplitSection';
import FAQ from '../components/home/FAQ';
import './AboutUs.css';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-us-page">
            {/* Hero Section */}
            <div className="section about-us-hero">
                <div className="container">
                    <div className="about-hero-flex">
                        <div className="about-hero-content">
                            <h1 className="about-hero-title">
                                About TRAZEIT Blockchain<br />
                                Food Traceability Experts<br />
                                for Global Compliance
                            </h1>
                            <p className="about-hero-subtitle">
                                Learn about TRAZEIT's mission to redefine food supply chain trust. Blockchain-native platform built by food-tech and compliance experts for manufacturers, exporters, retailers worldwide
                            </p>
                        </div>
                        <div className="about-hero-image-side">
                            <img
                                src={aboutHeroImage}
                                alt="Trazeit Blockchain Ecosystem"
                                className="about-hero-image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Redefining Trust Section */}
            <FeatureSplitSection
                heading="Redefining Trust in Global Food Systems"
                image={aboutRedefiningTrust}
                imageAlt="Redefining Trust"
                imagePosition="left"
                sectionClass="about-section"
                headingClass="about-heading"
                gridClass="about-grid"
            >
                <h3 className="about-subheading">Mission</h3>
                <p className="about-text">To make supply chain traceability transparent, verifiable, and universally accessible from smallholder farmer to global retailer</p>

                <h3 className="about-subheading">Vision</h3>
                <p className="about-text">Every food product carries a verified digital identity ensuring safety, sustainability, and accountability</p>
            </FeatureSplitSection>

            {/* Built by Experts Section */}
            <FeatureSplitSection
                heading="Built by Food Industry Experts for Food Industry Challenges"
                image={aboutFoodIndustry}
                imageAlt="Food Industry Challenges"
                imageBg={platformVisibilityBg}
                sectionClass="about-section"
                headingClass="about-heading"
                textClass="about-text"
                gridClass="about-grid"
                imageContainerClass="about-expert-image-container"
            >
                <p className="about-text" style={{ fontSize: '20px', marginBottom: '40px' }}>
                    TRAZEIT solves the real pressures food businesses face daily:
                </p>

                <ul className="about-feature-list">
                    {[
                        'Fragmented supplier data across 10+ organizations',
                        'Regulatory complexity (FSMA 204, ISO 22005, EUDR, FSSAI)',
                        'Recall costs averaging ₹50+ lakhs per incident',
                        'Consumer transparency demands via QR codes',
                        'Export documentation delays blocking market access'
                    ].map((item, index) => (
                        <li key={index} className="about-feature-item">
                            <img src={securityCheck} alt="Check" className="about-feature-check" />
                            {item}
                        </li>
                    ))}
                </ul>
            </FeatureSplitSection>

            {/* Global Regulatory Leadership */}
            <div className="section about-section">
                <div className="container">
                    <div className="about-regulatory-flex">
                        <div className="about-regulatory-box">
                            <div className="about-logos-container">
                                <img src={trazeitLogoBlue} alt="Trazeit" className="about-logo-main" />

                                <div className="about-logos-row">
                                    <img src={logoIso} alt="ISO 22005" className="about-logo-standard" />
                                    <img src={logoGs1} alt="GS1" className="about-logo-standard" />
                                    <img src={logoEu} alt="EU DR" className="about-logo-standard" />
                                </div>

                                <div className="about-logos-row">
                                    <img src={logoFsma} alt="FSMA 204" className="about-logo-fsma" />
                                    <img src={logoFssai} alt="FSSAI" className="about-logo-fssai" />
                                </div>
                            </div>
                        </div>
                        <div className="about-regulatory-content">
                            <h2 className="about-heading">Built for Global Regulatory<br />Leadership</h2>
                            <p className="about-text" style={{ fontSize: '20px', maxWidth: '500px' }}>
                                Designed to meet global food regulations, TRAZEIT delivers audit-ready, real-time traceability aligned with international and regional compliance standards
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Differentiators */}
            <div className="section about-section">
                <div className="container">
                    <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto 60px' }}>
                        <h2 className="about-heading" style={{ fontSize: '48px' }}>Four Key Differentiators</h2>
                        <p className="about-text">Trazeit makes end-to-end traceability easy to deploy and effortless to scale. Our streamlined four-step process ensures rapid adoption without disrupting your existing operations.</p>
                    </div>

                    <div className="about-cards-grid">
                        <div className="about-card">
                            <h3 className="about-card-title">Food Industry Native</h3>
                            <p className="about-card-text">Engineered specifically for food supply chains not retrofitted from general logistics software. Supports farmer-to-fork workflows, cold chain monitoring, and food safety Critical Tracking Events (CTEs).</p>
                        </div>
                        <div className="about-card">
                            <h3 className="about-card-title">Compliance Intelligence</h3>
                            <p className="about-card-text">Automated CTEs and Key Data Elements (KDEs) per ISO 22005. FSMA 204 lot code automation. EUDR geolocation validation. No manual compliance checking required</p>
                        </div>
                        <div className="about-card">
                            <h3 className="about-card-title">True Blockchain Architecture</h3>
                            <p className="about-card-text">Hyperledger Fabric core—not bolted-on blockchain. Cryptographic immutability from day one. Smart contracts enforce compliance rules automatically</p>
                        </div>
                        <div className="about-card">
                            <h3 className="about-card-title">Real-World Implementation</h3>
                            <p className="about-card-text">Supports analog-to-digital transitions. Works with smallholder farmers using basic mobile phones. Scales to multinational retailers with complex ERP integrations</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ />
        </div>
    );
};

export default AboutUs;
