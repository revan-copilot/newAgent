import ComplianceHeroCentered from '../../components/compliance/ComplianceHeroCentered';
import EUDRWorkflow from '../../components/compliance/EUDRWorkflow';
import EUDRGeolocation from '../../components/compliance/EUDRGeolocation';
import EUDRRiskScoring from '../../components/compliance/EUDRRiskScoring';
import FAQ from '../../components/home/FAQ';

import heroImg from '../../assets/images/compliance/eudr/hero.png';

const eudrFaqs = [
    {
        question: 'Does millet count as EUDR commodity?',
        answer: 'Currently no, but monitor updates. Cocoa, coffee, nuts in millet snacks would trigger EUDR. TRAZEIT tracks all potentially affected ingredients'
    },
    {
        question: 'How do farmers capture GPS data?',
        answer: 'Farmers can use the TRAZEIT mobile app to record precise GPS coordinates directly on-site. The data is captured even in offline mode and synced once a connection is available, ensuring verified origin data.'
    }
];

function EUDR() {
    return (
        <div className="eudr-page">
            <ComplianceHeroCentered
                title="Navigate EU Deforestation Regulation with Verified Sourcing"
                description="European Union Regulation 2023/1115 requires proof that beef, cocoa, coffee, palm oil, soy, rubber, and wood products are deforestation-free, with farm-level geolocation and due-diligence compliance."
                image={heroImg}
                imageAlt="EUDR Commodities and Impact"
            />
            <EUDRWorkflow />
            <EUDRGeolocation />
            <EUDRRiskScoring />
            <FAQ items={eudrFaqs} />
        </div>
    );
}

export default EUDR;
