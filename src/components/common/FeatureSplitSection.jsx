import React from 'react';

const FeatureSplitSection = ({
    heading,
    subheading,
    text,
    children,
    image,
    imageAlt,
    imagePosition = 'right',
    imageBg,
    sectionClass = '',
    containerClass = '',
    contentClass = '',
    imageContainerClass = '',
    imageClass = '',
    headingClass = 'section-heading',
    subheadingClass = 'section-subheading',
    textClass = 'section-text',
    gridClass = ''
}) => {
    const isImageRight = imagePosition === 'right';

    return (
        <div className={`section ${sectionClass}`}>
            <div className={`container ${containerClass}`}>
                <div className={`feature-split-grid ${isImageRight ? '' : 'feature-split-grid-reverse'} ${gridClass}`}>
                    {/* Content Column */}
                    <div className={`feature-split-content ${contentClass}`}>
                        {subheading && <h3 className={subheadingClass}>{subheading}</h3>}
                        {heading && <h2 className={headingClass}>{heading}</h2>}
                        {text && <p className={textClass}>{text}</p>}
                        {children}
                    </div>

                    {/* Image Column */}
                    {image && (
                        <div
                            className={`feature-split-image-container ${imageContainerClass}`}
                            style={imageBg ? { backgroundImage: `url(${imageBg})` } : {}}
                        >
                            <img src={image} alt={imageAlt} className={`feature-split-image ${imageClass}`} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FeatureSplitSection;
