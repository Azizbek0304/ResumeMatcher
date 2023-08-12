import React from 'react';
import './tryit.css';

function TryIt({ isNightMode }) {
  return (
    <section className={`try-it ${isNightMode ? 'night-mode' : 'light-mode'}`}>
      <div className="try-it-content">
        <h1>Resume Matcher</h1>
        <h3>Optimise your resume with AI for ATS and get hired</h3>
        <button className="try-it-button">Try It for Free</button>
      </div>
    </section>
  );
}

export default TryIt;
