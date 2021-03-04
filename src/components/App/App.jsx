import React from 'react';
import Header from './../Header/Header';
import SearchBox from './../SearchBox/SearchBox';
import ResultsContainer from './../ResultsContainer/ResultsContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headerExpanded: true,

        suggestedNames: [],

        onChangeMethod: (input) => {
            this.setState({
                headerExpanded: !input,
                suggestedNames: input ? name(input) : [],
            });
        },
    };

    render() {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} />
                <SearchBox onChangeMethod={this.state.onChangeMethod} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;
