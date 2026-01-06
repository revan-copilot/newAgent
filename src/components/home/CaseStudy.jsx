import milletLogo from '../../assets/images/millet_logo.png';
import interviewImg from '../../assets/images/case_study_interview.png';

function CaseStudy() {
    return (
        <section id="case-studies" className="case-study">
            <div className="container">
                <div className="case-study-header">
                    <h3>Learn from the best</h3>
                </div>
                <div className="case-study-card">
                    <div className="case-study-grid">
                        <div className="case-study-logo-col">
                            <img src={milletLogo} alt="Millet Logo" className="millet-logo" />
                        </div>
                        <div className="case-study-content-col">
                            <p className="case-study-quote">
                                "TRAZEIT gave us ISO 22005 documentation that opened EU markets. Export revenue up 40% in 8 months"
                            </p>
                            <div className="case-study-author-info">
                                <span>– Operations Director, Millet Food Manufacturer</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="case-study-detail">
                    <h2>How Millet Manufacturer Achieved Compliance & Export Growth</h2>
                    <div className="case-study-detail-image">
                        <img src={interviewImg} alt="Millet Manufacturer Interview" />
                    </div>
                    <p className="case-study-detail-text">
                        A 50-employee millet processor tracked farmer sourcing through EU export using TRAZEIT. Achieved ISO 22005 certification in 6 months, expanded to 3 EU markets, 40% revenue growth. Recall investigation time dropped from 2 weeks to 2 hours
                    </p>
                    <button className="btn btn-primary">Read Full Case Study →</button>
                </div>
            </div>
        </section>
    );
}

export default CaseStudy;
