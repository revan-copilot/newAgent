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
import VideoSection from '../../components/industries/VideoSection';
import SolutionResults from '../../components/solutions/SolutionResults';
import FAQ from '../../components/home/FAQ';
import './ForManufacturers.css';

const ForManufacturers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="for-manufacturers">
            {/* Hero Section */}
            {/* Hero Section */}
            {/* Hero Section */}
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-[120px] sm:pt-[150px] sm:pb-[100px]">
                <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat w-full h-full" style={{ backgroundImage: `url(${manufHeroBg})` }}></div>
                <div className="absolute inset-0 bg-black/60 z-[1]"></div>
                <div className="container relative z-[2] text-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-white font-[Lateef] font-medium mb-7 w-full -tracking-[0.01em] text-[2rem] leading-[1.2] sm:text-[2.75rem] sm:leading-[1.1] lg:text-[106px] lg:leading-[91px]">
                            Prove Product Quality and Compliance to Every Stakeholder
                        </h1>
                        <p className="text-white font-[Inter] font-normal mb-12 text-base leading-6 sm:text-[20px] sm:leading-[30px] lg:text-[23px] lg:leading-[34px] w-full mx-auto">
                            Demonstrate verified product quality and regulatory compliance across the supply chain with real-time, auditable traceability—trusted by regulators, partners, and consumers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 flex-wrap justify-center items-center w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-6 py-3 text-base font-medium text-white bg-[#1E4D8C] rounded-sm transition-all duration-200 hover:bg-[#163A6B] hover:-translate-y-[1px] hover:shadow-lg">Request a Demo</button>
                            <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-transparent border border-white rounded-sm transition-all duration-200 hover:bg-white hover:text-[#0F172A]">
                                <img src={arrowBtn} alt="Play" className="w-[18px] h-[18px] transition-all duration-200 group-hover:brightness-0" />
                                Watch 2-Min Demo Video
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <div className="section fm-section">
                <div className="container">
                    <div className="fm-pain-points-grid">
                        <div className="fm-pain-points-left">
                            <h2 className="fm-heading">Manufacturer Pain Points Across Quality, Compliance, and Traceability</h2>
                            <p className="fm-text">
                                Manufacturers struggle with fragmented data, delayed traceability, manual compliance processes, and limited visibility across suppliers—leading to higher risks, recalls, and operational costs.
                            </p>
                        </div>
                        <div className="fm-pain-points-right">
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
                        </div>
                    </div>
                </div>
            </div>


            {/* Process Flow Image */}
            <div className="section fm-section" style={{ paddingBottom: '0' }}>
                <div className="container">
                    <div className="fm-process-flow-container" style={{ marginTop: '0' }}>
                        <img src={manufProcessFlow} alt="Process Flow" className="fm-process-image" />
                    </div>
                </div>
            </div>

            {/* Core Platform Features */}
            <div className="section fm-section fm-section-light">
                <div className="container">
                    <div className="fm-features-grid">
                        <div className="fm-features-left">
                            <h2 className="fm-heading">Core Platform Features</h2>
                            <p className="fm-text">
                                Everything manufacturers need to manage traceability, ensure compliance, and maintain product quality—from supplier to shelf.
                            </p>
                            <div className="fm-feature-items">
                                <div className="fm-feature-item">
                                    <div className="fm-check-icon">
                                        <img src={securityCheck} alt="Check" />
                                    </div>
                                    <div>
                                        <h4>Supplier Portal</h4>
                                        <p>Verify farmer certifications, test results</p>
                                    </div>
                                </div>
                                <div className="fm-feature-item">
                                    <div className="fm-check-icon">
                                        <img src={securityCheck} alt="Check" />
                                    </div>
                                    <div>
                                        <h4>Batch Tracking</h4>
                                        <p>Every production step timestamped</p>
                                    </div>
                                </div>
                                <div className="fm-feature-item">
                                    <div className="fm-check-icon">
                                        <img src={securityCheck} alt="Check" />
                                    </div>
                                    <div>
                                        <h4>Quality Integration</h4>
                                        <p>Lab results auto-linked to batches</p>
                                    </div>
                                </div>
                                <div className="fm-feature-item">
                                    <div className="fm-check-icon">
                                        <img src={securityCheck} alt="Check" />
                                    </div>
                                    <div>
                                        <h4>Automated Reports</h4>
                                        <p>FSSAI, ISO 22005 audit packages</p>
                                    </div>
                                </div>
                                <div className="fm-feature-item">
                                    <div className="fm-check-icon">
                                        <img src={securityCheck} alt="Check" />
                                    </div>
                                    <div>
                                        <h4>Retailer Transparency</h4>
                                        <p>Read-only batch access</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fm-features-right">
                            <div className="fm-app-image-container">
                                <img src={manufMobileApp} alt="Trazeit App Interface" className="fm-app-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                    answer: 'Tracks smallholder farmer sourcing (geolocation, practices), processing steps, nutritional testing, FSSAI labeling, EU export documentation. Complete chain.',
                },
                {
                    question: 'Can we start small?',
                    answer: 'Yes. Begin with one product line or facility. TRAZEIT scales as you grow — add suppliers, processing lines, and export destinations without re-architecting your traceability system.',
                },
                {
                    question: 'How does TRAZEIT handle batch-level traceability?',
                    answer: 'Every input is linked to every output at each processing step. If a quality issue arises, pinpoint the exact batch, supplier, and processing parameters in seconds — not days.',
                },
                {
                    question: 'Does it integrate with existing manufacturing systems?',
                    answer: 'TRAZEIT connects with ERP, MES, and quality management systems via API. Existing workflows stay intact while gaining blockchain-verified traceability.',
                },
            ]} />
        </div>
    );
};

export default ForManufacturers;
