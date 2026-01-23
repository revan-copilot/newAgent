import React from 'react';
import './ResultsDelivered.css';

const ResultsDelivered = ({ title = "Results Delivered", subtext, data }) => {
    return (
        <div className="section fm-section">
            <div className="container">
                <div className="fm-results-header">
                    <h2 className="fm-heading-center">{title}</h2>
                    {subtext && (
                        <p className="fm-results-subtext">
                            {subtext}
                        </p>
                    )}
                </div>

                <div className="fm-results-grid">
                    {data.map((item, index) => (
                        <div key={index} className="fm-results-card">
                            <div className="fm-results-icon-wrapper">
                                <img src={item.icon} alt={`${item.label} Icon`} className="fm-results-icon" />
                            </div>
                            <div className="fm-results-content">
                                <h3 className="fm-results-metric">{item.metric}</h3>
                                <p className="fm-results-label">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResultsDelivered;
