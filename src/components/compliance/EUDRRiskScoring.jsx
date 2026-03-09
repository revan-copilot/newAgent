import React from 'react';
import ComplianceSplitSection from './ComplianceSplitSection';
import riskImg from '../../assets/images/compliance/eudr/automated-risk-scoring.png';

const risks = [
    {
        title: "High Risk – Deforestation Zone Exposure",
        description: "Coordinates fall within a confirmed deforestation area, indicating high compliance vulnerability and immediate regulatory concern."
    },
    {
        title: "Medium Risk – Frontier Proximity",
        description: "Location is near an active deforestation frontier, requiring enhanced due diligence and continuous monitoring."
    },
    {
        title: "Low Risk – Established Agricultural Land",
        description: "Coordinates are linked to long-term agricultural use with no recent deforestation activity, indicating stable compliance status."
    },
    {
        title: "Very Low Risk – Certified Sustainable Source",
        description: "Farm is verified under recognized sustainability standards, demonstrating strong environmental compliance and minimal regulatory risk."
    }
];



function EUDRRiskScoring() {
    return (
        <ComplianceSplitSection
            title="Automated Risk Scoring Engine"
            description="AI-driven analytics automatically evaluate geolocation, satellite history, and compliance data to generate real-time risk scores — enabling proactive decision-making, regulatory readiness, and deforestation-free assurance across the supply chain"
            items={risks}
            image={riskImg}
            imageAlt="Automated Risk Scoring Engine"
        />
    );
}

export default EUDRRiskScoring;
