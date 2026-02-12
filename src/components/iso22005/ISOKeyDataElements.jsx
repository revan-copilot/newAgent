import kdeImage from '../../assets/images/kde.png';
import SplitLayout from '../common/SplitLayout';

const kdeItems = [
    'Product identity (name, batch, GTIN)',
    'Processing applied (method, duration)',
    'Date/time/location',
    'Responsible organization/person',
    'Input/output product links',
    'Supplier/customer identification',
];

function ISOKeyDataElements() {
    return (
        <SplitLayout
            title="Key Data Elements (KDEs) – Auto-Captured Data Framework"
            description="Key Data Elements (KDEs) in TRAZEIT are auto-captured data points for each tracking event, covering product, process, time, location, and partner details to enable accurate, real-time, audit-ready traceability."
            image={kdeImage}
            imageAlt="Key Data Elements Framework"
        >
            {/* Checklist */}
            <div className="space-y-5">
                {kdeItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                            <svg className="w-6 h-6 text-primary-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="M9 12l2 2 4-4" />
                            </svg>
                        </div>
                        <span className="text-text-dark text-base">{item}</span>
                    </div>
                ))}
            </div>
        </SplitLayout>
    );
}

export default ISOKeyDataElements;
