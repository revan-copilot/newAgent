import ComplianceSplitSection from './ComplianceSplitSection';
import automationMain from '../../assets/images/compliance/fsma204/automation-main.png';
import icon1 from '../../assets/images/compliance/fsma204/automation-icon-1.svg';
import icon2 from '../../assets/images/compliance/fsma204/automation-icon-2.svg';
import icon3 from '../../assets/images/compliance/fsma204/automation-icon-3.svg';
import icon4 from '../../assets/images/compliance/fsma204/automation-icon-4.svg';
import icon5 from '../../assets/images/compliance/fsma204/automation-icon-5.svg';

const automationFeatures = [
    {
        title: 'Auto Lot Code Assignment',
        description: 'GTIN + sequential numbering',
        icon: icon1
    },
    {
        title: 'Supplier/Customer Linking',
        description: 'Every transaction blockchain recorded',
        icon: icon2
    },
    {
        title: 'Searchable Electronic Records',
        description: 'Instant lot code lookup',
        icon: icon3
    },
    {
        title: 'FDA Response Templates',
        description: 'Pre-formatted compliance packages',
        icon: icon4
    },
    {
        title: 'Training Documentation',
        description: 'Built-in employee certification',
        icon: icon5
    }
];



function FSMAAutomation() {
    return (
        <ComplianceSplitSection
            title="FSMA 204 Compliance Automation"
            description="Automates lot coding, supplier and customer linking, record retention, and compliance reporting to deliver fast, audit-ready FSMA 204 traceability with minimal manual effort."
            items={automationFeatures}
            image={automationMain}
            imageAlt="Compliance Automation Illustration"
        />
    );
}

export default FSMAAutomation;
