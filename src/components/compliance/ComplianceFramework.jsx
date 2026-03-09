import ComplianceSplitSection from './ComplianceSplitSection';
import frameworkImage from '../../assets/images/compilance-framework-coverage.png';


function ComplianceFramework() {
    return (
        <ComplianceSplitSection
            title="Compliance Framework Coverage"
            description="End-to-end support for global, regional, and retailer-mandated compliance frameworks—built to scale across markets and regulations"
            items={frameworks}
            image={frameworkImage}
            imageAlt="Compliance Framework Coverage"
        />
    );
}

export default ComplianceFramework;
