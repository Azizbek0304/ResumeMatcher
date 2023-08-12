import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faFileAlt,
  faMagic,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';
import './whychoose.css';

function WhyChoose({ isNightMode }) {
  return (
    <section
      className={`why-choose ${isNightMode ? 'night-mode' : 'light-mode'}`}
    >
      <div className="why-choose-content">
        <h1>Why Resume Matcher</h1>
        <div className="why-choose-items">
          <div className="why-choose-item">
            <FontAwesomeIcon icon={faCheck} className="why-choose-icon" />
            <h3>Simple</h3>
          </div>
          <div className="why-choose-item">
            <FontAwesomeIcon icon={faFileAlt} className="why-choose-icon" />
            <h3>ATS Friendly Resumes</h3>
          </div>
          <div className="why-choose-item">
            <FontAwesomeIcon icon={faMagic} className="why-choose-icon" />
            <h3>Optimised Content</h3>
          </div>
          <div className="why-choose-item">
            <FontAwesomeIcon icon={faPalette} className="why-choose-icon" />
            <h3>Awesome Design</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
