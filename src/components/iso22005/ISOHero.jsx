import { useEffect } from 'react';

function ISOHero() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section section-light pt-32 lg:pt-40 pb-16">
            <div className="container">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-[1.15] font-bold text-text-dark mb-6">
                        Achieve ISO 22005 Certification with Built-In Traceability Framework
                    </h1>
                    <p className="text-text-gray text-base sm:text-lg leading-relaxed">
                        The International Standard for Food Chain Traceability (2007) applies to all food supply chain organizations and requires a documented one-step-back, one-step-forward traceability system, making it mandatory for EU exports and global food safety certification.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ISOHero;
