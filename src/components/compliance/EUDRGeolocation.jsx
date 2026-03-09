import React from 'react';
import ComplianceSplitSection from './ComplianceSplitSection';
import geoImg from '../../assets/images/compliance/eudr/farm-to-factory.png';

const items = [
    {
        title: "Millet Farm – GPS 13.2105°N, 79.1420°E",
        description: "Precise farm-level geolocation captured to establish verified origin and plot-level traceability."
    },
    {
        title: "Captured – Farmer Mobile / QR Scan",
        description: "On-site data is digitally recorded through secure mobile or QR scanning, ensuring real-time source authentication."
    },
    {
        title: "Validated – Against Satellite Deforestation Data",
        description: "AI cross-checks farm coordinates with historical satellite imagery (2020–2025) to confirm deforestation-free status."
    },
    {
        title: "Risk Score – Low (No Deforestation 2020–2025)",
        description: "Automated risk assessment evaluates land-use history and assigns a compliance rating."
    },
    {
        title: "Declaration – Auto-Generated for EU Customs",
        description: "System-generated, regulation-ready declaration created instantly for seamless EU import compliance."
    }
];



function EUDRGeolocation() {
    return (
        <ComplianceSplitSection
            title="Farm-to-Factory Geolocation Tracking"
            description="End-to-end location traceability that maps every product from its exact farm origin to the manufacturing facility. Using precise geolocation data and digital tracking, it ensures full supply chain transparency, compliance readiness, and real-time visibility from source to production."
            items={items}
            image={geoImg}
            imageAlt="Farm to Factory Geolocation"
            bgClass="bg-[#F8FAFC]"
        />
    );
}

export default EUDRGeolocation;
