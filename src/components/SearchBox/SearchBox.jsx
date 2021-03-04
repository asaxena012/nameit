import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onChangeMethod }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Enter keywords"
                className="search-input"
                onChange={(event) => {
                    onChangeMethod(event.target.value);
                }}
            />
        </div>
    );
};

export default SearchBox;
