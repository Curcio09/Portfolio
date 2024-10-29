import React from 'react';
import { Link } from 'react-router-dom';
import './SkillBootstrap.css';
import BootstrapForm from './img/Form.png';

function BootstrapSkillPage() {
  return (
    <div className="bootstrap-skill-container">
      <h2 className="bootstrap-skill-header">Bootstrap</h2>
      <p className="bootstrap-skill-intro">
        Bootstrap allows for rapid development of responsive websites. Through practical application, I have used Bootstrap’s extensive CSS and JavaScript components to streamline web design. My experience includes creating forms, navbars, and grids, enabling me to efficiently build professional, mobile-first web layouts.
      </p>

      {/* Projects Section */}
      <section className="bootstrap-projects">
        <h2>Projects</h2>
        <div className="bootstrap-projects-grid">
          <Link to="/BootstrapFormProject" className="bootstrap-project-item">
            <div className="bootstrap-project-content">
              <img src={BootstrapForm} alt="Bootstrap Form Project" className="bootstrap-project-image" />
              <div className="overlay">
                <div className="bootstrap-project-info">
                  <h3>Bootstrap Form</h3>
                  <p>A fully responsive form project utilizing Bootstrap’s grid system and components for structured, accessible design.</p>
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

export default BootstrapSkillPage;