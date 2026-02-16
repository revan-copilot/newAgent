import React, { useEffect } from 'react';
import platformCompliance from '../../assets/images/platform-compliance.png';
import complianceAssessment from '../../assets/images/regulartory-compliance-2.png';
import logoISO from '../../assets/images/logo-ISO.png';
import logoFSMA from '../../assets/images/logo_fsma204.png';
import logoEUDR from '../../assets/images/logo_eu_dr.png';
import logoGS1 from '../../assets/images/logo_gs1.png';
import securityCheck from '../../assets/images/security-check-stroke.png';
import SolutionHero from '../../components/solutions/SolutionHero';
import SolutionStandards from '../../components/solutions/SolutionStandards';
import AssessmentBanner from '../../components/solutions/AssessmentBanner';
import FAQ from '../../components/home/FAQ';

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
            <SolutionHero
                title="Meet Global Food Safety Standards Automatically"
                subtitle="78% of food exporters face documentation gaps. $2.6M average recall cost. Manual compliance = errors, delays, market exclusion"
            />

            {/* Compliance Engine & Standards Section */}
            <div className="section sol-section">
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
                        <SolutionStandards
                            title="TRAZEIT Compliance Engine"
                            description="Powerful key features designed to deliver real-time visibility, regulatory compliance, and complete product integrity across the food supply chain—from farm origin to consumer scan."
                            standards={standards}
                            checkIcon={securityCheck}
                        />
                    </div>
                </div>
            </div>

            {/* Assessment Banner Section */}
            <AssessmentBanner
                heading="Assess your gaps in 2 minutes"
                text="Quickly assess your compliance readiness in just 2 minutes with our free interactive checklist. Identify gaps instantly and download a personalized roadmap to meet regulatory and traceability requirements with confidence."
                buttonText="Download personalized roadmap"
                image={complianceAssessment}
                imageAlt="Assessment Checklist"
            />

            {/* FAQ Section */}
            <FAQ items={[
                {
                    question: 'Will TRAZEIT pass an ISO 22005 audit?',
                    answer: 'Multiple clients certified using TRAZEIT documentation. System generates complete audit package automatically',
                },
                {
                    question: "What's the FSMA 204 deadline?",
                    answer: 'The compliance date for all persons subject to the recordkeeping requirements of FSMA Rule 204 is January 20, 2026. TRAZEIT ensures you are compliant and audit-ready well before the deadline.',
                },
            ]} />
        </div>
    );
};

export default RegulatoryCompliance;
