import React from 'react';
import './Solutions.css';

const SolutionResults = ({
    title = "Results Delivered",
    subtitle,
    data
}) => {
    return (
        <div className="sol-section-white">
            <div className="container">
                <div className="sol-results-header">
                    <h2 className="sol-results-title">{title}</h2>
                    {subtitle && (
                        <p className="sol-results-subtitle">{subtitle}</p>
                    )}
                </div>

                <div className="sol-results-grid">
                    {data.map((item, index) => (
                        <div key={index} className="sol-result-card">
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="sol-result-icon"
                            />
                            <div>
                                <h3 className="sol-result-metric">{item.metric}</h3>
                                <p className="sol-result-label">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SolutionResults;
