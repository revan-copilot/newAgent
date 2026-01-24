import React, { useEffect } from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import SolutionFeatures from '../../components/solutions/SolutionFeatures';
import SolutionResults from '../../components/solutions/SolutionResults';
import FAQ from '../../components/home/FAQ';
import transparencyHero from '../../assets/images/transparency-hero.png';
import transparency1 from '../../assets/images/transparency-1.png';
import transparency2 from '../../assets/images/transparency-2.png';
import transparency3 from '../../assets/images/transparency-3.png';
import transparency4 from '../../assets/images/transparency-4.png';

const BrandTransparency = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        { title: "Digital Product Passport", text: "Interactive supply chain journey" },
        { title: "Sustainability Metrics", text: "Water usage, carbon footprint, fair-trade" },
        { title: "Certification Verification", text: "Live links to ISO, organic certs" },
        { title: "Multi-Language Support", text: "50+ languages for global consumers" },
        { title: "Counterfeit Protection", text: "Blockchain prevents fake QR codes" }
    ];

    const impactsData = [
        { icon: transparency1, metric: "+35%", label: "Premium pricing (transparency justified)" },
        { icon: transparency2, metric: "2x", label: "QR scan rates vs. static info" },
        { icon: transparency3, metric: "85%", label: "Improved brand perception" },
        { icon: transparency4, metric: "0%", label: "Zero counterfeit issues" }
    ];

    return (
        <div className="brand-transparency">
            <SolutionHero
                title="Give Consumers the Transparency They Demand"
                subtitle="78% scan QR codes for origin info. 65% pay premium for transparent brands. Opaque supply chains = social media backlash, lost loyalty"
            />

            <SolutionFeatures
                image={transparencyHero}
                imageAlt="TRAZEIT Consumer Portal"
                heading="TRAZEIT Consumer Portal"
                subtitle="QR Scan → Verified Product Passport"
                featuresTitle="Key Features"
                features={features}
            />

            <SolutionResults
                title="Business Impact"
                subtitle="Lower risk, faster recalls, reduced compliance costs, and increased revenue through trusted end-to-end traceability."
                data={impactsData}
            />

            <FAQ />
        </div>
    );
};

export default BrandTransparency;
