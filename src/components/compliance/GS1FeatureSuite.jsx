import React from 'react';
import ComplianceSplitSection from './ComplianceSplitSection';
import featureSuiteImg from '../../assets/images/compliance/gs1/gs1-feature-suite.png';

const features = [
    {
        title: "Standards Compliance Assured",
        description: "All features aligned with GS1 requirements"
    },
    {
        title: "GTIN Accuracy Assured",
        description: "Automatic product code assignment and validation"
    },
    {
        title: "Partner Location Trust Assured",
        description: "GLN verification for every linked partner"
    },
    {
        title: "Shipment Tracking Assured",
        description: "SSCC codes generated uniquely for each shipment"
    },
    {
        title: "Consumer Access Assured",
        description: "Digital Link QR created and ready for scan use"
    },
    {
        title: "Data Consistency Assured",
        description: "EPCIS events synchronized across systems"
    },
    {
        title: "Retailer Acceptance Assured",
        description: "Built-in compliance reporting for buyer requirements"
    },
    {
        title: "Audit Readiness Assured",
        description: "Structured, verifiable identification records at all stages"
    }
];



function GS1FeatureSuite() {
    return (
        <ComplianceSplitSection
            title="TRAZEIT GS1 Feature Suite"
            description="TRAZEIT enables GS1-compliant product traceability with automated GTIN, GLN, SSCC, Digital Link QR, EPCIS sync, and compliance reporting"
            items={features}
            image={featureSuiteImg}
            imageAlt="Digital Traceability Platform"
        />
    );
}

export default GS1FeatureSuite;
