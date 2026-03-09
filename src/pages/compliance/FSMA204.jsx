import ComplianceHeroCentered from '../../components/compliance/ComplianceHeroCentered';
import FSMATraceabilityOverview from '../../components/compliance/FSMATraceabilityOverview';
import FSMAAutomation from '../../components/compliance/FSMAAutomation';
import ComplianceRoadmap from '../../components/compliance/ComplianceRoadmap';
import FAQ from '../../components/home/FAQ';

import builtInImage from '../../assets/images/compliance/fsma204/traceability-built-in.png';
import roadmap1 from '../../assets/images/compliance/fsma204/roadmap-1.png';
import roadmap2 from '../../assets/images/compliance/fsma204/roadmap-2.png';
import roadmap3 from '../../assets/images/compliance/fsma204/roadmap-3.png';
import roadmap4 from '../../assets/images/compliance/fsma204/roadmap-4.png';
import roadmap5 from '../../assets/images/compliance/fsma204/roadmap-5.png';

const roadmapPhases = [
    {
        label: 'WEEK 1 - 2',
        headline: 'Identify all applicable FSMA 204 high-risk food products, map affected SKUs, and define traceability coverage across your supply chain.',
        image: roadmap1,
        imageAlt: 'Phase 1: Product Scoping and Supply Chain Mapping',
    },
    {
        label: 'WEEK 3 - 4',
        headline: 'Configure standardized lot codes, GTIN mapping, and establish supplier–customer record linking across all transactions.',
        image: roadmap2,
        imageAlt: 'Phase 2: Configuration and Linking',
    },
    {
        label: 'WEEK 5 - 6',
        headline: 'Deploy staff training, assign traceability responsibilities, and operationalize digital record capture across departments.',
        image: roadmap3,
        imageAlt: 'Phase 3: Training and Operation',
    },
    {
        label: 'WEEK 7 - 8',
        headline: 'Run controlled pilots with selected partners to validate lot tracking, data capture accuracy, and retrieval speed.',
        image: roadmap4,
        imageAlt: 'Phase 4: Pilots and Validation',
    },
    {
        label: 'WEEK 9 - 12',
        headline: 'Complete full rollout, verify end-to-end traceability performance, and prepare audit-ready reports and test retrieval scenarios.',
        image: roadmap5,
        imageAlt: 'Phase 5: Full Rollout and Readiness',
    },
];

const fsmaFaqs = [
    {
        question: 'Which products need FSMA 204 compliance?',
        answer: 'High-risk: leafy greens, cheeses, sprouts, smoked seafood, nut butters, ready-to-eat deli salads, etc. TRAZEIT identifies applicable products automatically'
    },
    {
        question: 'What happens if FDA requests records?',
        answer: 'Under FSMA 204, you must provide requested traceability records to the FDA within 24 hours. TRAZEIT’s one-click retrieval ensure you meet this deadline with verified digital records.'
    }
];

const FSMA204 = () => {
    return (
        <div className="fsma-204-page">
            <ComplianceHeroCentered
                title="Meet FDA FSMA 204 – 20 Minute Traceability Built In"
                description="Stay compliant with FDA FSMA 204 with automated end-to-end lot traceability. Track products across suppliers and customers with structured digital records for fast, audit-ready trace retrieval."
                image={builtInImage}
                imageAlt="FSMA 204 Traceability Interface"
            />
            <FSMATraceabilityOverview />
            <FSMAAutomation />
            <ComplianceRoadmap
                title="FSMA 204 Implementation Roadmap – 8–12 Week Compliance Plan"
                description="A structured 8–12 week rollout plan to achieve FSMA 204 traceability compliance through product scoping, lot configuration, training, pilot validation, and audit readiness."
                phases={roadmapPhases}
            />
            <FAQ items={fsmaFaqs} />
        </div>
    );
};

export default FSMA204;
