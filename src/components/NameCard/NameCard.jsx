import React from 'react';
import './NameCard.css';

const nameCheapURL =
    'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard = ({ suggestedName }) => {
    return (
        <a
            href={`${nameCheapURL}${suggestedName}`}
            className="name-card-link"
            target="_blank"
        >
            <div className="name-card">
                <p className="name-text">{suggestedName}</p>
            </div>
        </a>
    );
};

export default NameCard;
