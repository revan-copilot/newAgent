import ComplianceHeroCentered from '../../components/compliance/ComplianceHeroCentered';
import GS1FeatureSuite from '../../components/compliance/GS1FeatureSuite';
import GS1ShipmentAutomation from '../../components/compliance/GS1ShipmentAutomation';
import GS1DigitalLink from '../../components/compliance/GS1DigitalLink';
import GS1GTINAutomation from '../../components/compliance/GS1GTINAutomation';
import FAQ from '../../components/home/FAQ';

import heroBanner from '../../assets/images/compliance/gs1/gs1-hero.png';

const gs1Faqs = [
    {
        question: 'Do I need to buy GS1 numbers separately?',
        answer: 'Yes, get company prefix from GS1 India/other. TRAZEIT handles all numbering, validation, printing automation after that.'
    },
    {
        question: 'Which retailers require GS1',
        answer: 'Major global retailers including Walmart, Tesco, Costco, Amazon, and Kroger require GS1 identifiers (GTIN/GLN) for all product listings and shipment tracking.'
    }
];

function GS1() {
    return (
        <div className="gs1-page">
            <ComplianceHeroCentered
                title="Standardize Your Supply Chain with GS1 Identifiers"
                description="The Global Standard for Product Identification ensures unique product tracking across the supply chain and is required by major retailers like Walmart and Tesco, using four core identifiers."
                image={heroBanner}
                imageAlt="GS1 Global Standard Identifiers"
            />
            <GS1GTINAutomation />
            <GS1ShipmentAutomation />
            <GS1DigitalLink />
            <GS1FeatureSuite />
            <FAQ items={gs1Faqs} />
        </div>
    );
}

export default GS1;
