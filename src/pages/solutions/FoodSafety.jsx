import React, { useEffect } from 'react';
import SolutionHero from '../../components/solutions/SolutionHero';
import SolutionFeatures from '../../components/solutions/SolutionFeatures';
import SolutionResults from '../../components/solutions/SolutionResults';
import FAQ from '../../components/home/FAQ';
import foodSafetyHero from '../../assets/images/food-safety-hero.png';
import foodSafetyFeatures from '../../assets/images/food-safety-features.png';
import foodSafety1 from '../../assets/images/food-safety-1.png';
import foodSafety2 from '../../assets/images/food-safety-2.png';
import foodSafety3 from '../../assets/images/food-safety-3.png';
import foodSafety4 from '../../assets/images/food-safety-4.png';

const FoodSafety = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        { title: "Recall Readiness Score", text: "Pre-calculated for every batch" },
        { title: "Scenario Modeling", text: "What if Supplier X fails?" },
        { title: "Regulatory Templates", text: "FDA, FSSAI, EU formatted notifications" }
    ];

    const impactsData = [
        { icon: foodSafety1, metric: "85%", label: "Recall notification reduction (3 days → 8 minutes)" },
        { icon: foodSafety2, metric: "100%", label: "Maintained consumer trust through rapid response" },
        { icon: foodSafety3, metric: "60%", label: "Product loss prevention" },
        { icon: foodSafety4, metric: "0%", label: "Zero regulatory penalties" }
    ];

    return (
        <div className="food-safety">
            {/* Custom Hero Section with Diagram */}
            <SolutionHero
                title="Turn Food Safety Crises into Minutes, Not Weeks"
                subtitle="$2.6M average recall cost. 3-4 weeks to identify scope. 60% product loss from delayed response. Manual batch hunting across Excel sheets, emails, paper records fails regulators and consumers."
            >
                <div className="fs-hero-diagram-container">
                    <img src={foodSafetyHero} alt="From Incident to Isolation - 8 Minutes" className="fs-hero-image" />
                </div>
            </SolutionHero>

            <SolutionFeatures
                image={foodSafetyFeatures}
                imageAlt="Batch Relationship Mapping & Recall Readiness"
                heading="Key Features"
                features={features}
            />

            <SolutionResults
                title="Proven Results"
                subtitle="Measurable outcomes with faster recalls, zero audit gaps, improved operational efficiency, and increased brand trust through verified traceability"
                data={impactsData}
            />

            <FAQ items={[
                {
                    question: 'How does TRAZEIT find affected products so fast?',
                    answer: 'Blockchain records every batch movement with parent-child relationships. Search once, see complete downstream impact across all customers instantly',
                },
                {
                    question: 'What happens during an actual recall?',
                    answer: 'One-click recall activation notifies all affected partners immediately via SMS/email. The system auto-generates regulatory reports and blocks further scans of affected batches.',
                },
                {
                    question: 'Can retailers use this too?',
                    answer: 'Yes. Retailers can use TRAZEIT to instantly check inbound shipments against recall lists and block sales of unsafe batches at the POS.',
                },
            ]} />
        </div>
    );
};

export default FoodSafety;
