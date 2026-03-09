import React from 'react';
import dashboardImg from '../../assets/images/compliance/checklist/result-dashboard.png';

function ResultsDashboard() {
    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-[40px] font-bold text-[#0E1624] mb-4 tracking-tight">
                        Instant Results Dashboard
                    </h2>
                    <p className="text-[#475569] text-xl leading-relaxed">
                        View your compliance score in real time with clearly categorized risk insights, gap identification, and actionable improvement areas — all presented in a single, easy-to-read dashboard.
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="relative w-full max-w-5xl group overflow-hidden rounded-[32px] border border-[#E2E8F0]/50 shadow-2xl transition-all duration-300 hover:shadow-[0_40px_80px_rgba(20,58,121,0.1)]">
                        <img
                            src={dashboardImg}
                            alt="Instant Results Dashboard"
                            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ResultsDashboard;
