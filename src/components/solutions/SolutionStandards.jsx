import React from 'react';

const SolutionStandards = ({
    title,
    description,
    standards,
    checkIcon
}) => {
    return (
        <div className="sol-standards-container">
            <h2 className="sol-standards-subheading" style={{ marginBottom: '16px' }}>{title}</h2>
            <p className="sol-standards-text" style={{ marginBottom: '60px' }}>
                {description}
            </p>

            <div className="sol-standards-grid">
                {standards.map((std, index) => (
                    <div key={index} className="sol-standard-card">
                        <div className="sol-standard-logo-container">
                            <img src={std.logo} alt={std.title} className="sol-standard-logo" />
                        </div>
                        <h4 className="sol-standard-title">{std.title}</h4>
                        <div>
                            {std.checks.map((check, idx) => (
                                <div key={idx} className="sol-standard-check-item">
                                    <img src={checkIcon} alt="check" className="sol-standard-check-icon" />
                                    <span className="sol-standard-check-text">{check}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SolutionStandards;
