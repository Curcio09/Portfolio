import React from 'react';
import { Link } from 'react-router-dom';
import './SkillHTMLCSS.css';
import HTMLCSSPortfolio from './img/project.png';

function HTMLCSSSkillPage() {
  return (
    <div className="html-css-skill-container">
      <h2 className="html-css-skill-header">HTML & CSS</h2>
      <p className="html-css-skill-intro">
        HTML & CSS form the backbone of web development. My skills in these technologies enable me to create structured, visually appealing, and responsive websites. I have worked on several projects that showcase my ability to create and style websites with clean and accessible code.
      </p>

      {/* Projects Section */}
      <section className="html-css-projects">
        <h2>Projects</h2>
        <div className="html-css-projects-grid">
          <Link to="/HTMLCSSPortfolio" className="html-css-project-item">
            <div className="html-css-project-content">
              <img src={HTMLCSSPortfolio} alt="HTML & CSS Portfolio" className="html-css-project-image" />
              <div className="overlay">
                <div className="html-css-project-info">
                  <h3>Portfolio Website</h3>
                  <p>A portfolio website created with HTML & CSS, featuring responsive design, semantic structure, and custom styling.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <Link to="/about">
          <button className="back-button">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default HTMLCSSSkillPage;