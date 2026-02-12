import milletLogo from '../../assets/images/millet_logo.png';
import interviewImg from '../../assets/images/case_study_interview.png';

function CaseStudy() {
    return (
        <section id="case-studies" className="py-20 bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h3 className="text-[2rem] font-bold text-[#1e293b]">Learn from the best</h3>
                </div>
                <div className="w-full max-w-full mx-auto bg-[#F8FAFC] rounded-lg p-10 md:p-16">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 text-center md:text-left">
                        <div className="flex-[0_0_250px] flex justify-center items-center">
                            <img src={milletLogo} alt="Millet Logo" className="max-w-full h-auto max-h-20" />
                        </div>
                        <div className="flex-1">
                            <p className="text-[#334155] text-lg leading-relaxed mb-6 font-normal">
                                "TRAZEIT gave us ISO 22005 documentation that opened EU markets. Export revenue up 40% in 8 months"
                            </p>
                            <div className="text-sm text-[#64748b]">
                                <span>– Operations Director, Millet Food Manufacturer</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-[960px] mx-auto mt-24">
                    <h2 className="text-[1.75rem] font-bold text-[#0f172a] mb-10 leading-[1.3]">How Millet Manufacturer Achieved Compliance & Export Growth</h2>
                    <div className="rounded-2xl overflow-hidden mb-10 max-w-[960px]">
                        <img src={interviewImg} alt="Millet Manufacturer Interview" className="w-full h-auto block" />
                    </div>
                    <p className="text-[#334155] text-xl leading-7 mb-8">
                        A 50-employee millet processor tracked farmer sourcing through EU export using TRAZEIT. Achieved ISO 22005 certification in 6 months, expanded to 3 EU markets, 40% revenue growth. Recall investigation time dropped from 2 weeks to 2 hours
                    </p>
                    <button className="bg-[#1E4D8C] text-white px-6 py-3 rounded hover:bg-[#163A6B] transition-colors font-medium">Read Full Case Study →</button>
                </div>
            </div>
        </section>
    );
}

export default CaseStudy;
