import { useState } from 'react';
import faqIcon from '../../assets/images/faq_question_icon.png';
import plusIcon from '../../assets/images/toggle-plus-sign.png';
import minusIcon from '../../assets/images/toggle-minus-sign.png';

function FAQ({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const defaultFaqs = [
        {
            question: 'What makes TRAZEIT different from ERP systems?',
            answer: 'Traditional ERPs track inventory but lack blockchain immutability and real-time multi-party traceability required by FSMA 204 and ISO 22005. TRAZEIT creates verified audit trails across your entire supply chain'
        },
        {
            question: 'Is TRAZEIT compliant with FSMA 204 requirements?',
            answer: 'Yes, our platform is fully compliant with FSMA 204 rule requirements, ensuring all Key Data Elements (KDEs) and Critical Tracking Events (CTEs) are captured and stored efficiently.'
        },
        {
            question: 'How quickly can we go live?',
            answer: 'Our streamlined onboarding process allows most supply chain partners to go live within 4-6 weeks, with minimal disruption to existing operations.'
        },
        {
            question: 'What if our suppliers don\'t have TRAZEIT?',
            answer: 'Suppliers can participate through our lightweight portal or mobile app without needing a full enterprise license, ensuring 100% supply chain visibility.'
        }
    ];

    const faqs = items || defaultFaqs;

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container">
                <div className="text-center max-w-[800px] mx-auto mb-16">
                    <h2 className="text-[2.25rem] font-bold text-[#0f172a] mb-6">Frequently Asked Questions</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="flex-1 w-full">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border-b border-[#E2E8F0] ${activeIndex === index ? 'active' : ''}`}
                            >
                                <button
                                    className="w-full text-left py-6 flex justify-between items-center text-lg lg:text-xl font-medium text-[#1e293b] hover:text-[#1E4D8C] transition-colors"
                                    onClick={() => toggleFaq(index)}
                                >
                                    {faq.question}
                                    <span className="flex items-center justify-center ml-4">
                                        <img src={activeIndex === index ? minusIcon : plusIcon} alt="Toggle" className="w-6 h-6 object-contain" />
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-[#64748b] leading-relaxed text-base lg:text-lg">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:w-[400px] bg-[#F8FAFC] rounded-2xl p-8 lg:p-10 text-center">
                        <div className="w-16 h-16 bg-[#E0E7FF] rounded-full flex items-center justify-center mx-auto mb-6">
                            <img src={faqIcon} alt="Question Mark" className="w-8 h-8 object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1e293b] mb-4">Do you have more questions?</h3>
                        <p className="text-[#64748b] mb-8 leading-relaxed">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                        <button className="bg-[#1E4D8C] text-white px-6 py-3 rounded font-medium hover:bg-[#163A6B] transition-colors w-full">Contact Us →</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;


