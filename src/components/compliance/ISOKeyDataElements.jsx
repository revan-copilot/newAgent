import ComplianceSplitSection from './ComplianceSplitSection';

const kdeItems = [
    'Product identity (name, batch, GTIN)',
    'Processing applied (method, duration)',
    'Date/time/location',
    'Responsible organization/person',
    'Input/output product links',
    'Supplier/customer identification',
];

import kdeImage from '../../assets/images/kde.png';

const items = kdeItems.map(item => ({ description: item }));

function ISOKeyDataElements() {
    return (
        <ComplianceSplitSection
            title="Key Data Elements (KDEs) – Auto-Captured Data Framework"
            description="Key Data Elements (KDEs) in TRAZEIT are auto-captured data points for each tracking event, covering product, process, time, location, and partner details to enable accurate, real-time, audit-ready traceability."
            items={items}
            image={kdeImage}
            imageAlt="Key Data Elements Framework"
        />
    );
}

export default ISOKeyDataElements;
