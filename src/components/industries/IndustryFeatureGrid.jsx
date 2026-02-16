import React from 'react';

const IndustryFeatureGrid = ({
    heading,
    text,
    children,
    image,
    imageAlt,
    imagePosition = 'right',
    sectionClass = '',
    containerClass = ''
}) => {
    const isImageRight = imagePosition === 'right';

    return (
        <div className={`section ind-section ${sectionClass}`}>
            <div className="container">
                <div className={`ind-features-grid ${isImageRight ? '' : 'ind-features-grid-reverse'} ${containerClass}`}>
                    {/* Content Column */}
                    <div className="ind-features-content">
                        {heading && <h2 className="ind-heading">{heading}</h2>}
                        {text && <p className="ind-text">{text}</p>}
                        {children}
                    </div>

                    {/* Image Column */}
                    {image && (
                        <div className="ind-features-image-container">
                            <img src={image} alt={imageAlt} className="ind-feature-image" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IndustryFeatureGrid;
