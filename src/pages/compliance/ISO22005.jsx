import ComplianceHeroCentered from '../../components/compliance/ComplianceHeroCentered';
import ISOCoreRequirements from '../../components/compliance/ISOCoreRequirements';
import ISOCriticalEvents from '../../components/compliance/ISOCriticalEvents';
import ISOKeyDataElements from '../../components/compliance/ISOKeyDataElements';
import ISOTraceabilitySolution from '../../components/compliance/ISOTraceabilitySolution';
import ComplianceRoadmap from '../../components/compliance/ComplianceRoadmap';
import FAQ from '../../components/home/FAQ';

import phase1 from '../../assets/images/phase-1.png';
import phase2 from '../../assets/images/phase-2.png';
import phase3 from '../../assets/images/phase-3.png';
import phase4 from '../../assets/images/phase-4.png';
import phase5 from '../../assets/images/phase-5.png';

const roadmapPhases = [
    {
        label: 'PHASE 1 (2 WEEKS)',
        headline: 'Map the supply chain and identify all CTEs to ensure full traceability.',
        image: phase1,
        imageAlt: 'Supply chain mapping and CTE identification',
    },
    {
        label: 'PHASE 2 (3 WEEKS)',
        headline: 'Configure TRAZEIT Templates to customize traceability workflows with CTEs, KDEs, and standardized supply chain data.',
        image: phase2,
        imageAlt: 'Traceability template configuration',
    },
    {
        label: 'PHASE 3 (2 WEEKS)',
        headline: 'Test with key suppliers to validate data flow and ensure full system connectivity.',
        image: phase3,
        imageAlt: 'Supplier data flow validation',
    },
    {
        label: 'PHASE 4 (3 WEEKS)',
        headline: 'Deploy the full system rollout and train all partners for traceability workflow confidence.',
        image: phase4,
        imageAlt: 'System rollout and training',
    },
    {
        label: 'PHASE 5 (ONGOING)',
        headline: 'Prepare documentation and run mock audits to ensure continuous ISO 22005 compliance.',
        image: phase5,
        imageAlt: 'Compliance documentation and audit preparation',
    },
];

const isoFaqs = [
    {
        question: 'How long until ISO 22005 certification?',
        answer: '4-6 months with TRAZEIT vs 12+ months manual. Multiple millet manufacturers certified in under 6 months.',
    },
    {
        question: 'What if suppliers lack ISO systems?',
        answer: 'TRAZEIT provides lightweight supplier onboarding via mobile app or web portal. Suppliers can participate without needing full enterprise systems, ensuring complete chain traceability.',
    }
];

function ISO22005() {
    return (
        <div>
            <ComplianceHeroCentered
                title="Achieve ISO 22005 Certification with Built-In Traceability Framework"
                description="The International Standard for Food Chain Traceability (2007) applies to all food supply chain organizations and requires a documented one-step-back, one-step-forward traceability system, making it mandatory for EU exports and global food safety certification."
            />
            <ISOCoreRequirements />
            <ISOCriticalEvents />
            <ISOKeyDataElements />
            <ISOTraceabilitySolution />
            <ComplianceRoadmap
                badge="Implementation Roadmap"
                title="5-Phase Traceability Implementation Roadmap"
                description="A structured five-phase roadmap that guides organizations from system design to full deployment, ensuring compliant, scalable, and audit-ready traceability with TRAZEIT."
                phases={roadmapPhases}
                footerBanner={{
                    title: "End-to-End Certification Roadmap (Phases 1–5)",
                    description: "All five phases — from system design to management review — are completed within a structured 4–6 month timeline, ensuring audit-ready certification and compliance."
                }}
            />
            <FAQ items={isoFaqs} />
        </div>
    );
}

export default ISO22005;
