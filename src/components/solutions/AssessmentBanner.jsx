import React from 'react';

const AssessmentBanner = ({
    heading,
    text,
    buttonText,
    image,
    imageAlt
}) => {
    return (
        <div className="section sol-section">
            <div className="container">
                <div className="sol-assessment-banner">
                    {/* Left Content */}
                    <div className="sol-assessment-content">
                        <h2 className="sol-assessment-heading">
                            {heading}
                        </h2>
                        <p className="sol-assessment-text">
                            {text}
                        </p>
                        <button className="sol-assessment-button">
                            {buttonText} →
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="sol-assessment-image-container">
                        <img
                            src={image}
                            alt={imageAlt}
                            className="sol-assessment-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssessmentBanner;
