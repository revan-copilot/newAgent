import cteImage from '../../assets/images/cte.png';
import plantIcon from '../../assets/images/plant-icon.svg';
import factoryIcon from '../../assets/images/factory-icon.svg';
import transportIcon from '../../assets/images/transport-icon.svg';
import shoppingBagIcon from '../../assets/images/shopping-bag-icon.svg';
import SplitLayout from '../common/SplitLayout';

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
        <SplitLayout
            title="Critical Tracking Events (CTEs) – TRAZEIT Traceability Framework"
            description="Critical Tracking Events (CTEs) in TRAZEIT capture key supply chain points where products move or change, enabling consistent data capture, end-to-end visibility, and faster compliance-ready traceability."
            image={cteImage}
            imageAlt="Critical Tracking Events Framework"
        >
            {/* Stage Items */}
            <div>
                {stages.map((stage, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 sm:gap-5 py-6 sm:py-8"
                        style={{ borderTop: '1px solid #E5EAF2' }}
                    >
                        {/* Circular Icon */}
                        <div className="w-[48px] h-[48px] rounded-[24px] flex items-center justify-center flex-shrink-0 bg-white" style={{ border: '1px solid #E5EAF2' }}>
                            <img src={stage.icon} alt={stage.title} className="w-[24px] h-[24px] object-contain" />
                        </div>
                        <div>
                            <h4 className="text-base sm:text-lg font-bold text-text-dark mb-0.5">
                                {stage.title}
                            </h4>
                            <p className="text-text-gray text-sm sm:text-base">
                                {stage.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </SplitLayout>
    );
}

export default ISOCriticalEvents;
