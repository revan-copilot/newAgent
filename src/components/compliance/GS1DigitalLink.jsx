import React from 'react';
import ComplianceSplitSection from './ComplianceSplitSection';
import digitalLinkImg from '../../assets/images/compliance/gs1/gs1-digital-link.png';

const features = [
    {
        title: "Consumer Transparency Assured",
        description: "One QR scan reveals verified product information instantly"
    },
    {
        title: "Batch Traceability Assured",
        description: "Direct access to lot and batch history"
    },
    {
        title: "Certification Visibility Assured",
        description: "Approved certificates shown in the same scan view"
    },
    {
        title: "Standards-Based QR Assured",
        description: "Built on GS1 Digital Link structure"
    },
    {
        title: "Multi-Language Access Assured",
        description: "Supports 50+ languages for global consumers"
    },
    {
        title: "Offline Access Assured",
        description: "Data remains viewable after first successful sync"
    },
    {
        title: "Single-Code Experience",
        description: "One QR connects all consumer-facing product data reliably"
    }
];



function GS1DigitalLink() {
    return (
        <ComplianceSplitSection
            title="Consumer QR – GS1 Digital Link Enablement"
            description="Consumer QR powered by GS1 Digital Link lets users scan one code to view product details, batch traceability, and certifications, with 50+ language support and offline access after first sync."
            items={features}
            image={digitalLinkImg}
            imageAlt="GS1 Digital Link QR Code Engagement"
        />
    );
}

export default GS1DigitalLink;
