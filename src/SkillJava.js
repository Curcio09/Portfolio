import React from 'react';
import { Link } from 'react-router-dom';
import './SkillJava.css';
import JavaProject from './img/Bank.png';

function JavaSkillPage() {
  return (
    <div className="java-skill-container">
      <h2 className="java-skill-header">Java</h2>
      <p className="java-skill-intro">
        Java was the core language throughout my studies at Jamestown Community College, forming the foundation of most of my coursework. I explored complex topics like abstract data structures, object-oriented programming, and algorithm design. 
        With a focus on software design and development, I applied Java in multiple projects, gaining hands-on experience and problem-solving skills. 
        I graduated with an A.A.S. in Computer Science, equipped with a deep understanding of how to build robust applications using Java.
      </p>

      {/* Projects Section */}
      <section className="java-projects">
        <h2>Projects</h2>
        <div className="java-projects-grid">
          <Link to="/JavaBanking" className="java-project-item">
            <div className="java-project-content">
              <img src={JavaProject} alt="Java Banking" className="java-project-image" />
              <div className="overlay">
                <div className="java-project-info">
                  <h3>Java Banking System</h3>
                  <p>A basic Java banking system for managing accounts and transactions, demonstrating OOP principles.</p>
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

export default JavaSkillPage;