import ComplianceHero from '../components/compliance/ComplianceHero';
import ComplianceReadiness from '../components/compliance/ComplianceReadiness';
import ComplianceAutomation from '../components/compliance/ComplianceAutomation';
import ComplianceFramework from '../components/compliance/ComplianceFramework';
import FAQ from '../components/home/FAQ';

const complianceFaqs = [
    {
        question: 'Which compliance standard should I prioritize?',
        answer: 'FSMA 204 (USA exports), ISO 22005 (EU/global), EUDR (cocoa/coffee/nuts to EU), GS1 (retailers). Use our free assessment tool for personalized roadmap',
    },
    {
        question: 'Does TRAZEIT replace compliance consultants?',
        answer: 'No — TRAZEIT complements consultants by automating data capture, audit trails, and report generation. Consultants can focus on strategy while TRAZEIT handles the operational traceability infrastructure.',
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
