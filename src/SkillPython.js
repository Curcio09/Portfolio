import React from 'react';
import { Link } from 'react-router-dom';
import './SkillPython.css';
import PythonChatbot from './img/Python.png';
import PythonConvertor from './img/convertor.png';

function PythonSkillPage() {
  return (
    <div className="python-skill-container">
      <h2 className="python-skill-header">Python</h2>
      <p className="python-skill-intro">
        Python is a versatile programming language known for its simplicity and wide range of applications. During my time at Jamestown Community College, I gained foundational knowledge of Python through coursework that covered the basics and included various projects. These projects helped me apply Python in real-world scenarios, reinforcing my understanding of core concepts like data structures, algorithms, and object-oriented programming. My experience with Python has enabled me to write clean, efficient code and explore its use in tasks such as scripting, automation, and developing interactive applications.
      </p>

      {/* Projects Section */}
      <section className="python-projects">
        <h2>Projects</h2>
        <div className="python-projects-grid">
          <Link to="/PythonChatbot" className="python-project-item">
            <div className="python-project-content">
              <img src={PythonChatbot} alt="Python Chatbot" className="python-project-image" />
              <div className="overlay">
                <div className="python-project-info">
                  <h3>Python Chatbot</h3>
                  <p>A basic chatbot for interactive user experience, demonstrating natural language processing skills.</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/PythonConvertor" className="python-project-item">
            <div className="python-project-content">
              <img src={PythonConvertor} alt="Python Currency Convertor" className="python-project-image" />
              <div className="overlay">
                <div className="python-project-info">
                  <h3>Python Currency Convertor</h3>
                  <p>A simple currency converter for real-time exchange rate conversions, showcasing API integration and JavaScript functionality.</p>
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

export default PythonSkillPage;

