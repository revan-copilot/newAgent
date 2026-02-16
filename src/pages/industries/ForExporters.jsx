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

import IndustryHero from '../../components/industries/IndustryHero';
import IndustryFeatureGrid from '../../components/industries/IndustryFeatureGrid';
import FAQ from '../../components/home/FAQ';
import VideoSection from '../../components/industries/VideoSection';
import SolutionResults from '../../components/solutions/SolutionResults';
import '../../components/industries/Industries.css';

const ForExporters = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="for-exporters">
            {/* Hero Section */}
            <IndustryHero
                title="Expand Markets with Certified Compliance and Verified Authenticity"
                subtitle="5-7 day customs delays. Export rejections from documentation gaps. FSMA 204 deadline Dec 2026. Multi-country compliance chaos."
                bgImage={exportHeroBg}
                arrowIcon={arrowBtn}
            />

            {/* Results Delivered Section */}
            <SolutionResults
                title="Results Delivered"
                subtitle="Track measurable outcomes with TRAZEIT: faster recall response, reduced rejections, supplier compliance, and end-to-end traceability—all driving tangible business impact."
                data={[
                    { icon: resultIcon1, metric: "85%", label: "Customs: 5 days → <1 day" },
                    { icon: resultIcon2, metric: "2", label: "Documentation Cut from 2 Days to Hours" },
                    { icon: resultIcon3, metric: "+3", label: "Access to New Countries in 6 Months" },
                    { icon: resultIcon4, metric: "+40%", label: "Revenue from exports" }
                ]}
            />

            {/* Premium Export Intelligence Section */}
            <IndustryFeatureGrid
                heading="Premium Export Intelligence"
                text="Advanced automation that keeps you compliant, globally ready, and protected—without manual effort or delays"
                image={exportPremiumImg}
                imageAlt="Premium Export Intelligence"
            >
                <div className="ind-feature-items">
                    <div className="ind-feature-item">
                        <div className="fe-check-icon">🛡️</div>
                        <div>
                            <h4>Real-time regulation monitoring</h4>
                            <p>Automated compliance, global-ready documentation, and built-in product authenticity—handled in real time.</p>
                        </div>
                    </div>
                    <div className="ind-feature-item">
                        <div className="fe-check-icon">🛡️</div>
                        <div>
                            <h4>Multi-language documentation</h4>
                            <p>Real-time compliance, global documentation, and verified product authenticity.</p>
                        </div>
                    </div>
                    <div className="ind-feature-item">
                        <div className="fe-check-icon">🛡️</div>
                        <div>
                            <h4>Phytosanitary auto-generation</h4>
                            <p>Stay export-ready with live regulations, automated certificates, and anti-counterfeit protection.</p>
                        </div>
                    </div>
                    <div className="ind-feature-item">
                        <div className="fe-check-icon">🛡️</div>
                        <div>
                            <h4>Anti-counterfeiting verification</h4>
                            <p>One platform for live regulatory intelligence, automated certifications, and secure product verification.</p>
                        </div>
                    </div>
                </div>
            </IndustryFeatureGrid>

            {/* 50+ Country Compliance Section */}
            <IndustryFeatureGrid
                heading="50+ Country Compliance Frameworks"
                text="Meet global regulatory requirements with built-in compliance for the USA, EU, India, and more—powered by standardized, audit-ready traceability"
                imagePosition="none"
                sectionClass="ind-section-light"
            >
                <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', marginBottom: '60px' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
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
                <div className="ind-process-container">
                    <img src={exportChainImg} alt="Export Compliance Process" className="ind-process-image" />
                </div>
            </IndustryFeatureGrid>

            {/* Manufacturer in Action (Video) Section */}
            <VideoSection
                title="From Farm to Export—Fully Verified"
                thumbnail={exportVideoThumb}
                caption="See how TRAZEIT delivers real-time compliance, automated documentation, and product authenticity in one seamless export flow."
            />

            {/* FAQ Section */}
            <FAQ items={[
                {
                    question: 'Which export markets does TRAZEIT cover?',
                    answer: 'USA (FSMA 204), EU (EUDR/ISO 22005), Canada, Australia, Middle East, 50+ countries. Updates automatically for regulation changes',
                },
                {
                    question: 'How does EUDR geolocation work?',
                    answer: 'TRAZEIT captures GPS coordinates at harvest with polygon-level precision, links them to satellite deforestation data, and generates EUDR-compliant due diligence statements automatically.',
                },
            ]} />
        </div>
    );
};

export default ForExporters;
