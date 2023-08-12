import React from 'react';
import './howto.css';

function HowTo({ isNightMode }) {
  return (
    <section className={`how-to ${isNightMode ? 'night-mode' : 'light-mode'}`}>
      <div className="how-to-content">
        <h1>How it Works</h1>
        <div className="how-to-steps">
          <div className="how-to-step">
            <div className="step-number">1</div>
            <h2>Upload Your Resume</h2>
          </div>
          <div className="how-to-step">
            <div className="step-number">2</div>
            <h2>Ai Powered Analytics &amp; Tools</h2>
          </div>
          <div className="how-to-step">
            <div className="step-number">3</div>
            <h2>Algorithm Matches to Job Description</h2>
          </div>
          <div className="how-to-step">
            <div className="step-number">4</div>
            <h2>Get Optimised Resume</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowTo;
