import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './header.css';

function Header({ isNightMode, setIsNightMode }) {
  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <header className={`header ${isNightMode ? 'night-mode' : 'light-mode'}`}>
      <nav className="nav">
        <div className="logo">ResumeMatcher</div>
        <div className="nav-center">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="mode-toggle" onClick={toggleNightMode}>
            {isNightMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </div>
          <div className="sign-in">Sign In</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
