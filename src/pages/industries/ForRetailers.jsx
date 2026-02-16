import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import retailVideoThumb from '../../assets/images/retail-video.png';
import retailPremiumComponents from '../../assets/images/retail-premium.png';
import retailProcessFlow from '../../assets/images/retail-chain.png';
import retailHeroBg from '../../assets/images/retail-hero.png';
import arrowBtn from '../../assets/images/arrow.svg';
import securityCheck from '../../assets/images/security-check-stroke.png';
import resultIcon1 from '../../assets/images/retail-1.png';
import resultIcon2 from '../../assets/images/retail-2.png';
import resultIcon3 from '../../assets/images/retail-3.png';
import resultIcon4 from '../../assets/images/retail-4.png';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryFeatureGrid from '../../components/industries/IndustryFeatureGrid';
import VideoSection from '../../components/industries/VideoSection';
import SolutionResults from '../../components/solutions/SolutionResults';
import FAQ from '../../components/home/FAQ';
import '../../components/industries/Industries.css';

const ForRetailers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="for-retailers">
            {/* Hero Section */}
            <IndustryHero
                title="Assure Your Customers: Complete Supply Chain Transparency"
                subtitle="Supplier verification taking weeks. Private label recalls across 200+ stores. Consumers demanding origin proof via QR. Regulatory complexity"
                bgImage={retailHeroBg}
                arrowIcon={arrowBtn}
            />

            {/* Process Flow Image (Store-to-Farm Transparency) */}
            <div className="section ind-section">
                <div className="container">
                    <h2 className="ind-heading-center">Store-to-Farm Transparency</h2>
                    <p className="ind-text text-center" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
                        Track every step from store shelves back to the farm. Ensure complete visibility across the supply chain, building trust with consumers and stakeholders.
                    </p>
                    <div className="ind-process-container">
                        <img src={retailProcessFlow} alt="Store to Farm Transparency Process Flow" className="ind-process-image" />
                    </div>
                </div>
            </div>

            {/* Core Platform Features (Premium Export Intelligence) */}
            <IndustryFeatureGrid
                heading="Premium Export Intelligence"
                text="Advanced automation that keeps you compliant, globally ready, and protected—without manual effort or delays"
                image={retailPremiumComponents}
                imageAlt="Retail Intelligence Dashboard"
                sectionClass="ind-section-light"
            >
                <div className="ind-feature-items">
                    <div className="ind-feature-item">
                        <div className="ind-check-icon-container">
                            <img src={securityCheck} alt="Check" className="ind-check-icon" />
                        </div>
                        <div>
                            <h4>Supplier Dashboard</h4>
                            <p>Real-time compliance/quality scores</p>
                        </div>
                    </div>
                    <div className="ind-feature-item">
                        <div className="ind-check-icon-container">
                            <img src={securityCheck} alt="Check" className="ind-check-icon" />
                        </div>
                        <div>
                            <h4>Private Label Control</h4>
                            <p>Enforce manufacturer standards</p>
                        </div>
                    </div>
                    <div className="ind-feature-item">
                        <div className="ind-check-icon-container">
                            <img src={securityCheck} alt="Check" className="ind-check-icon" />
                        </div>
                        <div>
                            <h4>Consumer QR Generation</h4>
                            <p>GS1 Digital Link ready</p>
                        </div>
                    </div>
                    <div className="ind-feature-item">
                        <div className="ind-check-icon-container">
                            <img src={securityCheck} alt="Check" className="ind-check-icon" />
                        </div>
                        <div>
                            <h4>Store-Level Tracking</h4>
                            <p>Shelf placement to recall execution</p>
                        </div>
                    </div>
                    <div className="ind-feature-item">
                        <div className="ind-check-icon-container">
                            <img src={securityCheck} alt="Check" className="ind-check-icon" />
                        </div>
                        <div>
                            <h4>Rapid Recall</h4>
                            <p>Affected stores identified in minutes</p>
                        </div>
                    </div>
                </div>
            </IndustryFeatureGrid>

            {/* Retailer in Action Section (Video) */}
            <VideoSection
                title="Industries We Serve – Retail Solutions"
                thumbnail={retailVideoThumb}
                caption="Discover how our platform empowers retailers with real-time product traceability, compliance assurance, and enhanced supply chain visibility—ensuring quality from supplier to shelf."
            />

            {/* Results Delivered Section */}
            <SolutionResults
                title="Results Delivered"
                subtitle="Track measurable outcomes with TRAZEIT: faster recall response, reduced rejections, supplier compliance, and end-to-end traceability—all driving tangible business impact."
                data={[
                    { icon: resultIcon1, metric: "95%", label: "Supplier compliance" },
                    { icon: resultIcon2, metric: "8", label: "Recall execution minutes" },
                    { icon: resultIcon3, metric: "25%", label: "QR engagement scan rate" },
                    { icon: resultIcon4, metric: "98%", label: "Private label quality" }
                ]}
            />

            {/* FAQ Section */}
            <FAQ items={[
                {
                    question: 'Do stores need special hardware?',
                    answer: 'No. Existing barcode scanners work. Mobile app for managers. Web dashboard for HQ. Full POS integration available.',
                },
                {
                    question: 'How does this prevent supplier fraud?',
                    answer: 'Blockchain-verified provenance records are immutable. Every claim — organic, fair-trade, origin — is backed by timestamped evidence traceable to the source.',
                },
            ]} />
        </div>
    );
};

export default ForRetailers;
