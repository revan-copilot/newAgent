import illustrationImg from '../../assets/images/why_trazeit_illustration.png';

function WhyReplace() {
    return (
        <section id="solutions" className="why-replace">
            <div className="container">
                <div className="why-replace-grid">
                    <div className="why-replace-content">
                        <h2>Why TRAZEIT Outperforms<br />Traditional Traceability Systems</h2>

                        <div className="why-feature-block">
                            <h3>Complete Visibility</h3>
                            <p>
                                Real-time tracking from farm to consumer creates a single source of truth across all supply chain partners. Achieve instant batch-level traceability in seconds versus weeks with legacy systems. Eliminate data silos and conflicting records forever
                            </p>
                        </div>
                    </div>
                    <div className="why-replace-image">
                        <img src={illustrationImg} alt="Trazeit Supply Chain Network" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyReplace;
