import React from 'react';

const IndustryHero = ({
    title,
    subtitle,
    bgImage,
    onDemoClick,
    onVideoClick,
    demoText = "Request a Demo",
    videoText = "Watch 2-Min Demo Video",
    arrowIcon
}) => {
    return (
        <section className="ind-hero">
            <div
                className="ind-hero-bg"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            <div className="ind-hero-overlay"></div>
            <div className="container ind-hero-container">
                <div className="ind-hero-content">
                    <h1 className="ind-hero-title">
                        {title}
                    </h1>
                    <p className="ind-hero-subtitle">
                        {subtitle}
                    </p>
                    <div className="ind-hero-buttons">
                        <button
                            className="ind-btn ind-btn-primary"
                            onClick={onDemoClick}
                        >
                            {demoText}
                        </button>
                        <button
                            className="ind-btn ind-btn-outline group"
                            onClick={onVideoClick}
                        >
                            {arrowIcon && (
                                <img
                                    src={arrowIcon}
                                    alt="Play"
                                    className="ind-btn-icon"
                                />
                            )}
                            {videoText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryHero;
