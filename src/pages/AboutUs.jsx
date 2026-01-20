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
import FAQ from '../components/home/FAQ';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const styles = {
        section: { padding: '100px 0' },
        heading: { fontFamily: "'Lateef', serif", fontSize: '56px', fontWeight: '500', lineHeight: '1.2', color: '#0F172A', marginBottom: '24px' },
        subHeading: { fontFamily: "'Inter', sans-serif", fontSize: '24px', fontWeight: '700', color: '#0F172A', marginBottom: '12px' },
        text: { fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: '1.6', color: '#475569', marginBottom: '32px' },
        card: { background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05)', height: '100%' },
        cardTitle: { fontSize: '24px', fontWeight: '600', color: '#0F172A', marginBottom: '16px' },
        cardText: { fontSize: '16px', lineHeight: '1.6', color: '#475569' }
    };

    return (
        <div style={{ background: '#fff' }}>
            {/* Hero Section */}
            <div className="section section-light" style={{ paddingTop: '140px', paddingBottom: '100px' }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '4rem',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{ flex: 6 }}>
                            <h1 style={{
                                fontFamily: "'Lateef', serif",
                                fontSize: '70px',
                                fontWeight: '500',
                                fontStyle: 'normal',
                                marginBottom: '28px',
                                lineHeight: '80px',
                                color: '#0F172A'
                            }}>
                                About TRAZEIT Blockchain<br />
                                Food Traceability Experts<br />
                                for Global Compliance
                            </h1>
                            <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: '500',
                                fontStyle: 'normal',
                                fontSize: '20px',
                                lineHeight: '34px',
                                letterSpacing: '0%',
                                color: '#0E1624',
                                maxWidth: '600px'
                            }}>
                                Learn about TRAZEIT's mission to redefine food supply chain trust. Blockchain-native platform built by food-tech and compliance experts for manufacturers, exporters, retailers worldwide
                            </p>
                        </div>
                        <div style={{ flex: 4, display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={aboutHeroImage}
                                alt="Trazeit Blockchain Ecosystem"
                                style={{
                                    width: '100%',
                                    maxWidth: '520px',
                                    height: 'auto'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Redefining Trust Section */}
            <div className="section" style={styles.section}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={aboutRedefiningTrust}
                                alt="Redefining Trust"
                                style={{
                                    width: '100%',
                                    maxWidth: '500px'
                                }}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h2 style={styles.heading}>Redefining Trust in Global<br />Food Systems</h2>

                            <h3 style={styles.subHeading}>Mission</h3>
                            <p style={styles.text}>To make supply chain traceability transparent, verifiable, and universally accessible from smallholder farmer to global retailer</p>

                            <h3 style={styles.subHeading}>Vision</h3>
                            <p style={styles.text}>Every food product carries a verified digital identity ensuring safety, sustainability, and accountability</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Built by Experts Section */}
            <div className="section" style={{ ...styles.section, background: '#F8FAFC' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1 }}>
                            <h2 style={styles.heading}>Built by Food Industry Experts for<br />Food Industry Challenges</h2>
                            <p style={{ ...styles.text, fontSize: '20px', marginBottom: '40px' }}>TRAZEIT solves the real pressures food businesses face daily:</p>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    'Fragmented supplier data across 10+ organizations',
                                    'Regulatory complexity (FSMA 204, ISO 22005, EUDR, FSSAI)',
                                    'Recall costs averaging ₹50+ lakhs per incident',
                                    'Consumer transparency demands via QR codes',
                                    'Export documentation delays blocking market access'
                                ].map((item, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', fontSize: '18px', color: '#334155' }}>
                                        <img src={securityCheck} alt="Check" style={{ width: '24px', height: '24px', marginTop: '4px' }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                            <img src={aboutFoodIndustry} alt="Food Industry Challenges" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Regulatory Leadership */}
            <div className="section" style={styles.section}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap-reverse' }}>
                        <div style={{ flex: 4, background: '#F8FAFC', padding: '30px 0px', borderRadius: '40px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
                                <img src={trazeitLogoBlue} alt="Trazeit" style={{ height: '40px' }} />

                                <div style={{ display: 'flex', gap: '30px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <img src={logoIso} alt="ISO 22005" style={{ height: '60px' }} />
                                    <img src={logoGs1} alt="GS1" style={{ height: '60px' }} />
                                    <img src={logoEu} alt="EU DR" style={{ height: '60px' }} />
                                </div>

                                <div style={{ display: 'flex', gap: '40px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <img src={logoFsma} alt="FSMA 204" style={{ height: '70px' }} />
                                    <img src={logoFssai} alt="FSSAI" style={{ height: '50px' }} />
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: 6 }}>
                            <h2 style={styles.heading}>Built for Global Regulatory<br />Leadership</h2>
                            <p style={{ ...styles.text, fontSize: '20px', maxWidth: '500px' }}>
                                Designed to meet global food regulations, TRAZEIT delivers audit-ready, real-time traceability aligned with international and regional compliance standards
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Differentiators */}
            <div className="section" style={{ ...styles.section, background: '#F8FAFC' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 60px' }}>
                        <h2 style={{ ...styles.heading, fontSize: '48px' }}>Four Key Differentiators</h2>
                        <p style={styles.text}>Trazeit makes end-to-end traceability easy to deploy and effortless to scale. Our streamlined four-step process ensures rapid adoption without disrupting your existing operations.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '30px' }}>
                        <div style={styles.card}>
                            <h3 style={styles.cardTitle}>Food Industry Native</h3>
                            <p style={styles.cardText}>Engineered specifically for food supply chains not retrofitted from general logistics software. Supports farmer-to-fork workflows, cold chain monitoring, and food safety Critical Tracking Events (CTEs).</p>
                        </div>
                        <div style={styles.card}>
                            <h3 style={styles.cardTitle}>Compliance Intelligence</h3>
                            <p style={styles.cardText}>Automated CTEs and Key Data Elements (KDEs) per ISO 22005. FSMA 204 lot code automation. EUDR geolocation validation. No manual compliance checking required</p>
                        </div>
                        <div style={styles.card}>
                            <h3 style={styles.cardTitle}>True Blockchain Architecture</h3>
                            <p style={styles.cardText}>Hyperledger Fabric core—not bolted-on blockchain. Cryptographic immutability from day one. Smart contracts enforce compliance rules automatically</p>
                        </div>
                        <div style={styles.card}>
                            <h3 style={styles.cardTitle}>Real-World Implementation</h3>
                            <p style={styles.cardText}>Supports analog-to-digital transitions. Works with smallholder farmers using basic mobile phones. Scales to multinational retailers with complex ERP integrations</p>
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
