import React from 'react';
import icon1 from '../../assets/images/compliance/fsma204/rule-icon-1.png';
import icon2 from '../../assets/images/compliance/fsma204/rule-icon-2.svg';
import icon3 from '../../assets/images/compliance/fsma204/rule-icon-3.svg';
import icon4 from '../../assets/images/compliance/fsma204/rule-icon-4.svg';
import icon5 from '../../assets/images/compliance/fsma204/rule-icon-5.svg';
import icon6 from '../../assets/images/compliance/fsma204/rule-icon-6.svg';

const overviewItems = [
    {
        title: 'Lot Code Assignment',
        description: 'Lot codes are automatically generated during production to ensure every batch is uniquely and consistently identified',
        icon: icon1
    },
    {
        title: 'Supplier Records',
        description: 'All supplier details are digitally linked to each lot for instant backward traceability.',
        icon: icon2
    },
    {
        title: 'Customer Records',
        description: 'Every shipment and recipient is recorded to maintain a complete forward traceability chain.',
        icon: icon3
    },
    {
        title: '20-Minute Retrieval',
        description: 'Lot history can be searched and retrieved in under one minute for rapid compliance response.',
        icon: icon4
    },
    {
        title: 'FDA Report Format',
        description: 'Pre-built compliance templates generate audit-ready reports aligned with U.S. Food and Drug Administration requirements.',
        icon: icon5
    },
    {
        title: '2-Year Record Retention',
        description: 'Records are securely stored and automatically retained for the required compliance period.',
        icon: icon6
    }
];

function FSMATraceabilityOverview() {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-[40px] font-bold text-[#0E1624] tracking-tight">
                        FSMA 204 Traceability Rule Overview
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                    {overviewItems.map((item, index) => (
                        <div
                            key={index}
                            className="p-10 rounded-[32px] bg-[#F8FAFC] border border-[#E2E8F0]/30 shadow-sm transition-all hover:bg-white hover:border-[#143A79]/10"
                        >
                            <div className="mb-8 w-16 h-16 flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm border border-[#E2E8F0]/50">
                                <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-[22px] font-bold text-[#0E1624] mb-4 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-[#475569] text-base leading-relaxed font-normal">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FSMATraceabilityOverview;
