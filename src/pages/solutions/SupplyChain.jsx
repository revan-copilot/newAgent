import React, { useEffect } from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import SolutionFeatures from '../../components/solutions/SolutionFeatures';
import SolutionResults from '../../components/solutions/SolutionResults';
import FAQ from '../../components/home/FAQ';
import dashboardImg from '../../assets/images/supply-chain-mobile.png';
import icon1 from '../../assets/images/supply-chain-1.png';
import icon2 from '../../assets/images/supply-chain-2.png';
import icon3 from '../../assets/images/supply-chain-3.png';
import icon4 from '../../assets/images/supply-chain-4.png';

const SupplyChain = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const riskFeatures = [
        { title: "Supplier Compliance Score", text: "Certifications, audit dates, violations" },
        { title: "Quality Performance Trends", text: "Rejection rates, test failures over time" },
        { title: "Geopolitical Alerts", text: "Sourcing region food safety incidents" },
        { title: "Single-Supplier Dependency", text: "Flags business continuity risks" },
        { title: "Data Quality Monitoring", text: "Flags incomplete partner submissions" }
    ];

    const resultsData = [
        { icon: icon1, metric: "80%", label: "Fewer supply disruptions" },
        { icon: icon2, metric: "2x", label: "Early supplier issue detection" },
        { icon: icon3, metric: "45%", label: "Lower rejection rates" },
        { icon: icon4, metric: "100%", label: "Improved business continuity" }
    ];

    return (
        <div className="supply-chain">
            <SolutionHero
                title="Identify Supply Chain Vulnerabilities Before They Become Crises"
                subtitle="Single supplier failure = entire product line down. 68% of recalls from supplier contamination. No visibility into partner compliance until crisis hits"
            />

            <SolutionFeatures
                image={dashboardImg}
                imageAlt="TRAZEIT Risk Dashboard"
                heading="TRAZEIT Risk Dashboard"
                subtitle="Real-time supplier monitoring"
                featuresTitle="Risk Features"
                features={riskFeatures}
            />

            <SolutionResults
                title="Results Delivered"
                subtitle="Faster recalls, zero audit gaps, and stronger trust through verified traceability."
                data={resultsData}
            />

            <FAQ />
        </div>
    );
};

export default SupplyChain;
