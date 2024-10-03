import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
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
              <Link to="/skills/react">
                <img src={ReactButton} alt="React" className="skill-icon" />
              </Link>
            </div>
            <div className="skill-item">
              <Link to="/skills/javascript">
                <img src={JavaScriptButton} alt="JavaScript" className="skill-icon" />
              </Link>
            </div>
            <div className="skill-item">
              <Link to="/skills/python">
                <img src={PythonButton} alt="Python" className="skill-icon" />
              </Link>
            </div>
            <div className="skill-item">
              <Link to="/skills/java">
                <img src={JavaButton} alt="Java" className="skill-icon" />
              </Link>
            </div>
            <div className="skill-item">
              <Link to="/skills/figma">
                <img src={FigmaButton} alt="Figma" className="skill-icon" />
              </Link>
            </div>
            <div className="skill-item">
              <Link to="/skills/github">
                <img src={GitHubButton} alt="GitHub" className="skill-icon" />
              </Link>
            </div>
            <div className="skill-item">
              <Link to="/skills/php">
                <img src={PHPButton} alt="PHP" className="skill-icon" />
              </Link>
            </div>
            <div className="skill-item">
              <Link to="/skills/bootstrap">
                <img src={BootstrapButton} alt="Bootstrap" className="skill-icon" />
              </Link>
            </div>
            <div className="skill-item">
              <Link to="/skills/html-css">
                <img src={HTMLCSSButton} alt="HTML & CSS" className="skill-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
