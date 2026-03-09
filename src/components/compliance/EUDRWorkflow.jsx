import React from 'react';
import ComplianceSplitSection from './ComplianceSplitSection';
import workflowImg from '../../assets/images/compliance/eudr/compilance-workflow.png';

const steps = [
    {
        title: "GPS Data Capture",
        description: "Suppliers record precise farm-level coordinates to establish verified origin and traceable source data"
    },
    {
        title: "Satellite Validation",
        description: "TRAZEIT cross-checks geolocation data against historical satellite imagery to confirm deforestation-free status"
    },
    {
        title: "Automated Risk Assessment",
        description: "AI-driven algorithms analyze land-use history and assign a real-time compliance risk score"
    },
    {
        title: "Declaration Generation",
        description: "System automatically creates a regulation-ready compliance declaration based on validated data."
    },
    {
        title: "EU Customs Readiness",
        description: "Final documentation is structured and prepared for seamless submission to EU authorities."
    }
];



function EUDRWorkflow() {
    return (
        <ComplianceSplitSection
            title="End-to-End EUDR Compliance Workflow"
            description="A streamlined digital process where supplier GPS data is captured, validated against satellite deforestation records, automatically risk-scored, and transformed into a compliance-ready declaration — ensuring seamless EU customs submission with full traceability and regulatory confidence."
            items={steps}
            image={workflowImg}
            imageAlt="EUDR Compliance Workflow Diagram"
        />
    );
}

export default EUDRWorkflow;
