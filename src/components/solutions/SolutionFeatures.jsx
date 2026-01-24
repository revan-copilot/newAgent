import React from 'react';
import securityCheck from '../../assets/images/security-check-stroke.png';
import './Solutions.css';

const SolutionFeatures = ({
    image,
    imageAlt,
    heading,
    subtitle,
    featuresTitle = "Key Features",
    features
}) => {
    return (
        <div className="sol-section-white">
            <div className="container">
                <div className="sol-features-container">
                    {/* Left: Image */}
                    <div className="sol-features-image-container">
                        <img
                            src={image}
                            alt={imageAlt}
                            className="sol-features-image"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="sol-features-content">
                        <h2 className="sol-features-heading">{heading}</h2>
                        {subtitle && (
                            <p className="sol-features-subtitle">{subtitle}</p>
                        )}

                        <h3 className="sol-features-title">{featuresTitle}</h3>

                        <div className="sol-features-list">
                            {features.map((item, index) => (
                                <div key={index} className="sol-feature-item">
                                    <img
                                        src={securityCheck}
                                        alt="Check"
                                        className="sol-check-icon"
                                    />
                                    <div>
                                        <h4 className="sol-feature-item-title">
                                            {item.title}
                                        </h4>
                                        <p className="sol-feature-item-desc">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionFeatures;
