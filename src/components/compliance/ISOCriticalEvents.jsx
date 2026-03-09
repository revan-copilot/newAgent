import ComplianceSplitSection from './ComplianceSplitSection';
import cteImage from '../../assets/images/cte.png';
import plantIcon from '../../assets/images/plant-icon.svg';
import factoryIcon from '../../assets/images/factory-icon.svg';
import transportIcon from '../../assets/images/transport-icon.svg';
import shoppingBagIcon from '../../assets/images/shopping-bag-icon.svg';

const stages = [
    {
        icon: plantIcon,
        title: 'Primary production',
        description: 'Planting → Harvest → Storage',
    },
    {
        icon: factoryIcon,
        title: 'Processing',
        description: 'Receipt → Processing → Packaging → Storage',
    },
    {
        icon: transportIcon,
        title: 'Transport',
        description: 'Shipment → Receipt',
    },
    {
        icon: shoppingBagIcon,
        title: 'Retail',
        description: 'Shelf placement → Consumer sale',
    },
];

function ISOCriticalEvents() {
    return (
        <ComplianceSplitSection
            title="Critical Tracking Events (CTEs) – TRAZEIT Traceability Framework"
            description="Critical Tracking Events (CTEs) in TRAZEIT capture key supply chain points where products move or change, enabling consistent data capture, end-to-end visibility, and faster compliance-ready traceability."
            items={stages}
            image={cteImage}
            imageAlt="Critical Tracking Events Framework"
        />
    );
}

export default ISOCriticalEvents;
