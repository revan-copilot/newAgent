import React from 'react';
import securityCheck from '../../assets/images/security-check-stroke.png';

const assessmentCards = [
    {
        title: "FSMA 204 Readiness",
        count: "08 questions",
        description: "Assess your ability to meet FDA traceability requirements, ensure rapid recall capability, and maintain compliant digital recordkeeping for high-risk food products.",
        questions: ["Lot codes assigned automatically?", "20-minute traceability possible?", "FDA report formats ready?"]
    },
    {
        title: "ISO 22005 Alignment",
        count: "10 questions",
        description: "Evaluate whether your traceability system aligns with ISO 22005 principles, including documented processes, internal controls, and verification procedures.",
        questions: ["CTEs documented for all processes?", "Supplier/customer linking complete?", "System documentation exists?"]
    },
    {
        title: "GS1 Standards",
        count: "06 questions",
        description: "Check if your product identification, location codes, and shipment labeling follow global GS1 standards for accurate supply chain communication.",
        questions: ["GTINs assigned to all products?", "GLN for all facilities/partners?", "SSCC for pallet shipments?"]
    },
    {
        title: "EUDR Compliance",
        count: "08 questions",
        description: "Determine your preparedness to meet EU deforestation regulations through verified origin data, risk assessment, and due diligence documentation.",
        questions: ["GPS data from suppliers?", "Deforestation risk assessment?", "EU declaration capability?"]
    },
    {
        title: "Data Quality",
        count: "06 questions",
        description: "Measure the completeness, accuracy, and reliability of your traceability data to ensure audit readiness and supply chain transparency.",
        questions: ["95%+ data completeness?", "Blockchain audit trail?", "Multi-party verification?"]
    }
];

function AssessmentCard({ card }) {
    return (
        <div className="bg-[#F8FAFC] rounded-[24px] p-10 h-full flex flex-col border border-[#E2E8F0]/30 shadow-sm transition-all hover:bg-white hover:border-[#143A79]/10">
            <div className="flex justify-between items-baseline mb-6">
                <h3 className="text-[28px] font-bold text-[#0E1624] tracking-tight">{card.title}</h3>
                <span className="text-[28px] font-medium text-[#BBC9E0]/80">
                    {card.count}
                </span>
            </div>

            <p className="text-[#475569] text-base mb-12 leading-relaxed font-normal">
                {card.description}
            </p>

            <div className="space-y-6 mb-12 flex-grow">
                {card.questions.map((question, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                        <img src={securityCheck} alt="Check" className="w-6 h-6 shrink-0 object-contain" />
                        <span className="text-[#0E1624] text-[18px] font-semibold leading-tight">{question}</span>
                    </div>
                ))}
            </div>

            <div className="text-center mt-auto pt-6">
                <button className="text-[#143A79] text-[18px] font-semibold hover:underline transition-all">
                    View all
                </button>
            </div>
        </div>
    );
}

function InteractiveAssessment() {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-[40px] font-bold text-[#0E1624]">Interactive Assessment</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {assessmentCards.slice(0, 4).map((card, index) => (
                        <AssessmentCard key={index} card={card} />
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <div className="w-full lg:w-1/2">
                        <AssessmentCard card={assessmentCards[4]} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InteractiveAssessment;
