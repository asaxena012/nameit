import React, { useState } from 'react';
import Header from './../Header/Header';
import SearchBox from './../SearchBox/SearchBox';
import ResultsContainer from './../ResultsContainer/ResultsContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

const App = () => {
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);

    const onChangeMethod = (input) => {
        setHeaderExpanded(!input);
        setSuggestedNames(input ? name(input) : []);
    };

    return (
        <div>
            <Header headerExpanded={headerExpanded} />
            <SearchBox onChangeMethod={onChangeMethod} />
            <ResultsContainer suggestedNames={suggestedNames} />
        </div>
    );
};

export default App;
