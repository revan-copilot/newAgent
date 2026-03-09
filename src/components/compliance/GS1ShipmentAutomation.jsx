import React from 'react';
import ComplianceSplitSection from './ComplianceSplitSection';
import shipmentImg from '../../assets/images/compliance/gs1/gs1-shipment-coding.png';

const checklist = [
    {
        title: "Unique Facility Identification Assured",
        description: "Each factory/location receives a dedicated GLN code"
    },
    {
        title: "Shipment-Level Coding Assured",
        description: "Every shipment gets a unique SSCC for end-to-end tracking"
    },
    {
        title: "Auto-Generation Guaranteed",
        description: "GLN and SSCC created automatically without manual errors"
    },
    {
        title: "Step-by-Step Validation",
        description: "Codes verified at each logistics stage for accuracy"
    },
    {
        title: "Standards Compliance Assured",
        description: "Fully aligned with GS1 rules"
    },
    {
        title: "Labeling Ready",
        description: "Codes instantly usable for logistics labels and scanning"
    },
    {
        title: "Traceability Reliability",
        description: "Facility and shipment links always consistent across records"
    }
];



function GS1ShipmentAutomation() {
    return (
        <ComplianceSplitSection
            title="GLN & SSCC Automation – Smart Facility and Shipment Coding"
            description="GLN and SSCC automation assigns unique location and shipment codes with step-by-step validation, ensuring compliant, error-free logistics identification under GS1 standards."
            items={checklist}
            image={shipmentImg}
            imageAlt="GS1 GLN & SSCC Compliance Illustration"
        />
    );
}

export default GS1ShipmentAutomation;
