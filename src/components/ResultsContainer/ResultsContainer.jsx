import React from 'react';
import './ResultsContainer.css';
import NameCard from './../NameCard/NameCard';

const ResultsContainer = ({ suggestedNames }) => {
    // Get jsx elements from suggested names
    const suggestedNamesJsx = suggestedNames.map((suggestedName) => {
        return <NameCard suggestedName={suggestedName} />;
    });

    return <div className="results-container">{suggestedNamesJsx}</div>;
};

export default ResultsContainer;
