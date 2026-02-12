import ComplianceHero from '../components/compliance/ComplianceHero';
import ComplianceReadiness from '../components/compliance/ComplianceReadiness';
import ComplianceAutomation from '../components/compliance/ComplianceAutomation';
import ComplianceFramework from '../components/compliance/ComplianceFramework';
import FAQ from '../components/home/FAQ';

const complianceFaqs = [
    {
        question: 'Which compliance standard should I prioritize?',
        answer: 'FSMA 204 (USA exports), ISO 22005 (EU/global), EUDR (cocoa/coffee/nuts to EU), GS1 (retailers). Use our free assessment tool for personalized roadmap.',
    },
    {
        question: 'Does TRAZEIT replace compliance consultants?',
        answer: 'No — TRAZEIT complements consultants by automating data capture, audit trails, and report generation. Consultants can focus on strategy while TRAZEIT handles the operational traceability infrastructure.',
    },
    {
        question: 'Can TRAZEIT handle multiple compliance standards simultaneously?',
        answer: 'Yes. TRAZEIT\'s unified platform captures data once and maps it to multiple frameworks — FSMA 204, ISO 22005, EUDR, and GS1 — eliminating duplicate effort and ensuring consistent compliance across all standards.',
    },
    {
        question: 'What happens if compliance requirements change?',
        answer: 'TRAZEIT continuously monitors regulatory updates and automatically adjusts data capture templates and reporting formats, so your traceability system stays current without manual reconfiguration.',
    },
];

function ComplianceHub() {
    return (
        <>
            <ComplianceHero />
            <ComplianceReadiness />
            <ComplianceFramework />
            <ComplianceAutomation />
            <FAQ items={complianceFaqs} />
        </>
    );
}

export default ComplianceHub;
