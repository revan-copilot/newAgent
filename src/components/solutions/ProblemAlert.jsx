import React from 'react';

const ProblemAlert = ({ label, message }) => {
    return (
        <div className="sol-problem-alert">
            <p className="sol-problem-text">
                <span className="sol-problem-label">{label}:</span> {message}
            </p>
        </div>
    );
};

export default ProblemAlert;
