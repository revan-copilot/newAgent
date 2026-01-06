import { useState } from 'react';
import faqIcon from '../../assets/images/faq_question_icon.png';
import plusIcon from '../../assets/images/toggle-plus-sign.png';
import minusIcon from '../../assets/images/toggle-minus-sign.png';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
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

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq">
            <div className="container">
                <div className="faq-header">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq-container">
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                >
                                    {faq.question}
                                    <span className="faq-toggle-icon">
                                        <img src={activeIndex === index ? minusIcon : plusIcon} alt="Toggle" />
                                    </span>
                                </button>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="faq-contact-card">
                        <div className="faq-contact-icon">
                            <img src={faqIcon} alt="Question Mark" />
                        </div>
                        <h3>Do you have more questions?</h3>
                        <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                        <button className="btn btn-primary font-medium">Contact Us →</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;


