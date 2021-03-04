import React from 'react';
import './Header.css';
import headerImg from './header-image.svg';

const Header = ({ headerExpanded }) => {
    return (
        <div className="header-container">
            <img
                src={headerImg}
                alt="Header Image"
                className={`header-image ${
                    headerExpanded
                        ? 'header-container-expanded'
                        : 'header-container-contracted'
                }`}
            />
            <h1
                className={`header-text ${
                    headerExpanded
                        ? 'header-text-expanded'
                        : 'header-text-contracted'
                }`}
            >
                Name it!
            </h1>
        </div>
    );
};

export default Header;
