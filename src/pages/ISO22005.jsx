import ISOHero from '../components/iso22005/ISOHero';
import ISOCoreRequirements from '../components/iso22005/ISOCoreRequirements';
import ISOCriticalEvents from '../components/iso22005/ISOCriticalEvents';
import ISOKeyDataElements from '../components/iso22005/ISOKeyDataElements';
import ISOTraceabilitySolution from '../components/iso22005/ISOTraceabilitySolution';
import ISOImplementationRoadmap from '../components/iso22005/ISOImplementationRoadmap';
import FAQ from '../components/home/FAQ';

const isoFaqs = [
    {
        question: 'How long until ISO 22005 certification?',
        answer: '4-6 months with TRAZEIT vs 12+ months manual. Multiple millet manufacturers certified in under 6 months.',
    },
    {
        question: 'What if suppliers lack ISO systems?',
        answer: 'TRAZEIT provides lightweight supplier onboarding via mobile app or web portal. Suppliers can participate without needing full enterprise systems, ensuring complete chain traceability.',
    },
    {
        question: 'Does TRAZEIT cover internal traceability?',
        answer: 'Yes. TRAZEIT automatically links inputs to outputs at every processing step, satisfying ISO 22005 internal traceability requirements with batch-level precision.',
    },
    {
        question: 'How does TRAZEIT handle audit preparation?',
        answer: 'One-click audit report generation produces complete ISO 22005-compliant documentation packages, including CTE logs, KDE records, and system design documentation ready for third-party auditors.',
    },
];

function ISO22005() {
    return (
        <div>
            <ISOHero />
            <ISOCoreRequirements />
            <ISOCriticalEvents />
            <ISOKeyDataElements />
            <ISOTraceabilitySolution />
            <ISOImplementationRoadmap />
            <FAQ items={isoFaqs} />
        </div>
    );
}

export default ISO22005;
