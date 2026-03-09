import React from 'react';
import ComplianceSplitSection from './ComplianceSplitSection';
import gtinImg from '../../assets/images/compliance/gs1/gs1-automation.png';

const features = [
    {
        title: "Automatic GTIN Creation",
        description: "Unique 14-digit GTIN generated instantly at batch creation"
    },
    {
        title: "Product-Level Accuracy",
        description: "Each item (e.g., Millet Protein Bar 50g) mapped to the correct code"
    },
    {
        title: "Standards Compliance",
        description: "Fully aligned with GS1 identification rules"
    },
    {
        title: "Database Validation",
        description: "GTIN verified against global registry records"
    },
    {
        title: "Print Ready Output",
        description: "GS1-128 barcode and QR code generated automatically"
    },
    {
        title: "Traceability Assured",
        description: "Enables reliable tracking across supply chain stages"
    },
    {
        title: "Audit Ready",
        description: "Structured, verifiable identification data for inspections"
    }
];



function GS1GTINAutomation() {
    return (
        <ComplianceSplitSection
            title="GTIN Implementation – TRAZEIT Automation"
            description="TRAZEIT automates GTIN generation by assigning unique 14-digit batch codes, validating them with GS1, and instantly producing GS1-128 barcodes and QR codes for compliant product traceability."
            items={features}
            image={gtinImg}
            imageAlt="GTIN Automated Product Identification"
        />
    );
}

export default GS1GTINAutomation;
