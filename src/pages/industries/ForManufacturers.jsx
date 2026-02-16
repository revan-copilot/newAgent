import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import manufVideoThumb from '../../assets/images/industry-manufacture-video.png';
import manufMobileApp from '../../assets/images/industry-manufacture-mobile.png';
import manufProcessFlow from '../../assets/images/industry-manufacture-chain.png';
import manufHeroBg from '../../assets/images/industry-manufacture-hero.png';
import arrowBtn from '../../assets/images/arrow.svg';
import securityCheck from '../../assets/images/security-check-stroke.png';
import resultIcon1 from '../../assets/images/industry-manufacture-1.png';
import resultIcon2 from '../../assets/images/industry-manufacture-2.png';
import resultIcon3 from '../../assets/images/industry-manufacture-3.png';
import resultIcon4 from '../../assets/images/industry-manufacture-4.png';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryFeatureGrid from '../../components/industries/IndustryFeatureGrid';
import VideoSection from '../../components/industries/VideoSection';
import SolutionResults from '../../components/solutions/SolutionResults';
import FAQ from '../../components/home/FAQ';
import '../../components/industries/Industries.css';

const ForManufacturers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="for-manufacturers">
            {/* Hero Section */}
            <IndustryHero
                title="Prove Product Quality and Compliance to Every Stakeholder"
                subtitle="Demonstrate verified product quality and regulatory compliance across the supply chain with real-time, auditable traceability—trusted by regulators, partners, and consumers."
                bgImage={manufHeroBg}
                arrowIcon={arrowBtn}
            />

            {/* Pain Points Section */}
            <IndustryFeatureGrid
                heading="Manufacturer Pain Points Across Quality, Compliance, and Traceability"
                text="Manufacturers struggle with fragmented data, delayed traceability, manual compliance processes, and limited visibility across suppliers—leading to higher risks, recalls, and operational costs."
                imagePosition="none"
            >
                <ul className="fm-pain-list">
                    <li className="fm-pain-item">
                        <span className="fm-pain-icon">🧩</span>
                        <span><strong>Supplier quality gaps</strong> impacting finished product consistency</span>
                    </li>
                    <li className="fm-pain-item">
                        <span className="fm-pain-icon">📦</span>
                        <span><strong>Retailer demands</strong> for batch-level documentation and proof</span>
                    </li>
                    <li className="fm-pain-item">
                        <span className="fm-pain-icon">📋</span>
                        <span><strong>FSSAI / ISO 22005 audits</strong> requiring complete, audit-ready records</span>
                    </li>
                    <li className="fm-pain-item">
                        <span className="fm-pain-icon">🚫</span>
                        <span><strong>Export rejections</strong> due to missing or incomplete traceability</span>
                    </li>
                </ul>
            </IndustryFeatureGrid>


            {/* Process Flow Image */}
            <div className="section ind-section" style={{ paddingBottom: '0' }}>
                <div className="container">
                    <div className="ind-process-container" style={{ marginTop: '0' }}>
                        <img src={manufProcessFlow} alt="Process Flow" className="ind-process-image" />
                    </div>
                </div>
            </div>

            {/* Core Platform Features */}
            <IndustryFeatureGrid
                heading="Core Platform Features"
                text="Everything manufacturers need to manage traceability, ensure compliance, and maintain product quality—from supplier to shelf."
                image={manufMobileApp}
                imageAlt="Trazeit App Interface"
                sectionClass="ind-section-light"
            >
                <div className="ind-feature-items">
                    <div className="ind-feature-item">
                        <div className="ind-check-icon-container">
                            <img src={securityCheck} alt="Check" className="ind-check-icon" />
                        </div>
                        <div>
                            <h4>Supplier Portal</h4>
                            <p>Verify farmer certifications, test results</p>
                        </div>
                    </div>
                    <div className="ind-feature-item">
                        <div className="ind-check-icon-container">
                            <img src={securityCheck} alt="Check" className="ind-check-icon" />
                        </div>
                        <div>
                            <h4>Batch Tracking</h4>
                            <p>Every production step timestamped</p>
                        </div>
                    </div>
                    <div className="ind-feature-item">
                        <div className="ind-check-icon-container">
                            <img src={securityCheck} alt="Check" className="ind-check-icon" />
                        </div>
                        <div>
                            <h4>Quality Integration</h4>
                            <p>Lab results auto-linked to batches</p>
                        </div>
                    </div>
                    <div className="ind-feature-item">
                        <div className="ind-check-icon-container">
                            <img src={securityCheck} alt="Check" className="ind-check-icon" />
                        </div>
                        <div>
                            <h4>Automated Reports</h4>
                            <p>FSSAI, ISO 22005 audit packages</p>
                        </div>
                    </div>
                    <div className="ind-feature-item">
                        <div className="ind-check-icon-container">
                            <img src={securityCheck} alt="Check" className="ind-check-icon" />
                        </div>
                        <div>
                            <h4>Retailer Transparency</h4>
                            <p>Read-only batch access</p>
                        </div>
                    </div>
                </div>
            </IndustryFeatureGrid>

            {/* Manufacturer in Action Section */}
            <VideoSection
                title="Millet Manufacturer in Action: From 20 Farmers to EU Export"
                thumbnail={manufVideoThumb}
                caption="See how a millet manufacturer uses TRAZEIT for end-to-end traceability—from 20 verified farmers and millet lots, through processing and GTIN-labeled protein bars, to EU export with ISO 22005 certification."
            />

            {/* Results Delivered Section */}
            <SolutionResults
                title="Results Delivered"
                subtitle="Track measurable outcomes with TRAZEIT: faster recall response, reduced rejections, supplier compliance, and end-to-end traceability—all driving tangible business impact."
                data={[
                    { icon: resultIcon1, metric: "100%", label: "Batch traceability" },
                    { icon: resultIcon2, metric: "95%", label: "Supplier compliance" },
                    { icon: resultIcon3, metric: "100%", label: "Audit pass rate" },
                    { icon: resultIcon4, metric: "0%", label: "Export rejections" }
                ]}
            />

            {/* FAQ Section */}
            <FAQ items={[
                {
                    question: 'How does this help millet processors specifically?',
                    answer: 'Tracks smallholder farmer sourcing (geolocation, practices), processing steps, nutritional testing, FSSAI labeling, EU export documentation. Complete chain',
                },
                {
                    question: 'Can we start small?',
                    answer: 'Yes. Begin with one product line or facility. TRAZEIT scales as you grow — add suppliers, processing lines, and export destinations without re-architecting your traceability system.',
                },
            ]} />
        </div>
    );
};

export default ForManufacturers;
