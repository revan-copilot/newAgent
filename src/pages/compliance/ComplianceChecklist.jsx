import React, { useEffect } from 'react';
import ComplianceHeroCentered from '../../components/compliance/ComplianceHeroCentered';
import InteractiveAssessment from '../../components/compliance/InteractiveAssessment';
import ResultsDashboard from '../../components/compliance/ResultsDashboard';
import ComplianceRoadmap from '../../components/compliance/ComplianceRoadmap';

import heroImg from '../../assets/images/compliance/checklist/compliancew-checklist-hero.png';
import step1 from '../../assets/images/compliance/checklist/step-1.png';
import step2 from '../../assets/images/compliance/checklist/step-2.png';
import step3 from '../../assets/images/compliance/checklist/step-3.png';
import step4 from '../../assets/images/compliance/checklist/step-4.png';

const roadmapSteps = [
    {
        label: "WEEK 1-2",
        headline: "Implement automated lot generation and batch-level traceability",
        image: step1,
        imageAlt: "Lot Code Automation Setup"
    },
    {
        label: "WEEK 3-4",
        headline: "Collect and validate supplier geolocation data for origin transparency.",
        image: step2,
        imageAlt: "Supplier GPS Integration"
    },
    {
        label: "WEEK 5-8",
        headline: "Configure CTEs, enable 20-minute traceability, and ensure FDA-ready reporting.",
        image: step3,
        imageAlt: "FSMA 204 Compliance Execution"
    },
    {
        label: "WEEK 9-12",
        headline: "Complete documentation, verification, and audit preparation.",
        image: step4,
        imageAlt: "ISO 22005 Certification Readiness"
    }
];

function ComplianceChecklist() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="compliance-checklist-page">
            <ComplianceHeroCentered
                title="Free Compliance Checklist: Identify Your Gaps in 2 Minutes"
                description="Quickly identify compliance gaps across your processes with a simple, structured checklist. Get instant clarity on risk areas and know exactly what needs action — all in under two minutes."
                image={heroImg}
                imageAlt="Compliance Checklist Hero"
            />
            <InteractiveAssessment />
            <ResultsDashboard />
            <ComplianceRoadmap
                title="Your Custom Compliance Roadmap"
                description="A tailored 12-week action plan built around your current gaps, compliance priorities, and certification goals — designed to move you from risk to readiness with clear milestones and ROI visibility."
                phases={roadmapSteps}
            />
        </div>
    );
}

export default ComplianceChecklist;
