import React from 'react';
import { Link } from 'react-router-dom';
import './SkillJavaScript.css';
import JavaScriptStopwatch from './img/stopwatch.png';
import ReactCalculator from './img/React calculator.png';
import ReactToDo from './img/React to-do.png';

function JavaScriptSkillPage() {
  return (
    <div className="JavaScript-skill-container">
      <h2 className="JavaScript-skill-header">JavaScript</h2>
      <p className="javascript-skill-intro">
        JavaScript is a versatile programming language that forms the backbone of modern web development. I earned an A.A.S. in Computer Science from Jamestown Community College in May 2021, where I gained foundational knowledge in JavaScript. Additionally, I completed the Meta Certified Front-End Developer course in May 2024, further advancing my skills. Through various projects, including this portfolio website, I have used JavaScript to create dynamic, interactive web applications. My experience includes writing clean, efficient code, working with APIs, and utilizing DOM manipulation to enhance user experience.
      </p>

      {/* Projects Section */}
      <section className="JavaScript-projects">
        <h2>Projects</h2>
        <div className="JavaScript-projects-grid">
        <Link to="/JavaScripStopwatch" className="JavaScript-project-item">
            <div className="JavaScript-project-content">
              <img src={JavaScriptStopwatch} alt="JavaScrip Stopwatch" className="JavaScript-project-image" />
              <div className="overlay">
                <div className="JavaScript-project-info">
                  <h3>JavaScript Stopwatch</h3>
                  <p>A simple stopwatch built with JavaScript for accurate time tracking, featuring start, stop, and reset functionalities.</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/ReactCalculator" className="JavaScript-project-item">
            <div className="JavaScript-project-content">
              <img src={ReactCalculator} alt="React Calculator" className="JavaScript-project-image" />
              <div className="overlay">
                <div className="JavaScript-project-info">
                  <h3>React Calculator</h3>
                  <p>A responsive React calculator for basic arithmetic operations with a sleek, intuitive interface.</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/ToDo" className="JavaScript-project-item">
            <div className="JavaScript-project-content">
              <img src={ReactToDo} alt="React ToDo" className="JavaScript-project-image" />
              <div className="overlay">
                <div className="JavaScript-project-info">
                  <h3>To-Do List</h3>
                  <p>A versatile React to-do list app for managing tasks efficiently with a clean, user-friendly design.</p>
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

export default JavaScriptSkillPage;