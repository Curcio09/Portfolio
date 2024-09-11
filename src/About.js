import React from 'react';
import './About.css';
import ReactButton from './ReactButton.png';
import JavaScriptButton from './JavaScriptButton.png';
import PythonButton from './PythonButton.png';
import JavaButton from './JavaButton.png';
import FigmaButton from './FigmaButton.png';
import GitHubButton from './GitHubButton.png';
import PHPButton from './PHPButton.png';
import BootstrapButton from './BootstrapButton.png';
import HTMLCSSButton from './HTMLCSSButton.png';


function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Left Section: About */}
        <div className="about-text">
          <h2>About</h2>
          <p>
            My name is Chris Curcio, and I live in Olean, New York. I am a dedicated father 
            and a passionate front-end developer. I hold an A.A.S. in Computer Science from 
            Jamestown Community College, where I focused on software design and development, 
            studying computers, networking, programming, web technologies, and database design, 
            alongside advanced mathematics and computer theory. Proficient in React, JavaScript, 
            Python, Java, and PHP, I have also completed a Meta Front-End Developer certification 
            through Coursera.
          </p>
        </div>

        {/* Right Section: Skills */}
        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <img src={ReactButton} alt="React" className="skill-icon" />
            </div>
            <div className="skill-item">
              <img src={JavaScriptButton} alt="JavaScript" className="skill-icon" />
            </div>
            <div className="skill-item">
              <img src={PythonButton} alt="Python" className="skill-icon" />
            </div>
            <div className="skill-item">
              <img src={JavaButton} alt="Java" className="skill-icon" />
            </div>
            <div className="skill-item">
              <img src={FigmaButton} alt="Figma" className="skill-icon" />
            </div>
            <div className="skill-item">
              <img src={GitHubButton} alt="GitHub" className="skill-icon" />
            </div>
            <div className="skill-item">
              <img src={PHPButton} alt="PHP" className="skill-icon" />
            </div>
            <div className="skill-item">
              <img src={BootstrapButton} alt="Bootstrap" className="skill-icon" />
            </div>
            <div className="skill-item">
              <img src={HTMLCSSButton} alt="HTML & CSS" className="skill-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;