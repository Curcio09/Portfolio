import React from 'react';
import './SkillFigma.css';  // Import the CSS file for Figma skill
import FigmaDesign from './img/FigmaDesktop.png';
import FigmaMobile from './img/FigmaMobile.png';

function FigmaSkillPage() {
  return (
    <div className="figma-skill-container">
      <h2 className="figma-skill-header">Figma</h2>
      <p className="figma-skill-intro">
        Figma has been instrumental in designing the layout and user experience of my portfolio website. 
        I gained my Figma expertise while completing the Meta Front-End Developer certificate, where I worked on 
        several projects to design prototypes, wireframes, and visual elements. The files below represent the design stages 
        of my portfolio website, and you can download them to explore or use them as a reference for your own projects.
      </p>

      {/* Design Files Section */}
      <section className="figma-projects">
        <h2>Design Files</h2>
        <div className="figma-projects-grid">
          <a href={require('./designFiles/Portfolio.fig')} className="figma-project-item" download>
            <div className="figma-project-content">
              <img src={FigmaDesign} alt="Portfolio Website Design" className="figma-project-image" />
              <div className="overlay">
                <div className="figma-project-info">
                  <h3>Portfolio Desktop Design</h3>
                  <p>Download the desktop design of this portfolio website.</p>
                </div>
              </div>
            </div>
          </a>
          <a href={require('./designFiles/PortfolioMobile.fig')} className="figma-project-item" download>
            <div className="figma-project-content">
              <img src={FigmaMobile} alt="Portfolio Website Design" className="figma-project-image" />
              <div className="overlay">
                <div className="figma-project-info">
                  <h3>Portfolio Mobile Design</h3>
                  <p>Download the mobile design of this portfolio website.</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <a href="/about">
          <button className="back-button">Back</button>
        </a>
      </div>
    </div>
  );
}

export default FigmaSkillPage;