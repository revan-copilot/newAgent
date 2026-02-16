import React from 'react';
import './Solutions.css';

const SolutionHero = ({ title, subtitle, children, sectionClass = "sol-section-light" }) => {
    return (
        <div className={sectionClass}>
            <div className="container">
                <div className="sol-hero">
                    <h1 className="sol-hero-title">{title}</h1>
                    {subtitle && <p className="sol-hero-subtitle">{subtitle}</p>}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SolutionHero;
