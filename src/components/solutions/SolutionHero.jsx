import React from 'react';
import './Solutions.css';

const SolutionHero = ({ title, subtitle }) => {
    return (
        <div className="sol-section-light">
            <div className="container">
                <div className="sol-hero">
                    <h1 className="sol-hero-title">{title}</h1>
                    <p className="sol-hero-subtitle">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default SolutionHero;
