import React from 'react';
import { Link } from 'react-router-dom';
import './SkillReact.css';
import ReactCalculator from './img/React calculator.png';
import ReactToDo from './img/React to-do.png';

function ReactSkillPage() {
  return (
    <div className="react-skill-container">
      <h2 className="react-skill-header">React</h2>
      <p className="react-skill-intro">
        React is a powerful JavaScript library for building user interfaces and modern web applications. I completed the Meta Certified Front-End Developer course on May 14th, 2024, where I gained knowledge in React. I used React to create various projects, including a calculator and a to-do list. These projects, along with this portfolio website, showcase my proficiency in building dynamic, responsive user interfaces. My experience with React allows me to efficiently manage state, create reusable components, and build high-performance web applications.
      </p>

      {/* Projects Section */}
      <section className="react-projects">
        <h2>Projects</h2>
        <div className="react-projects-grid">
          <Link to="/ReactCalculator" className="react-project-item">
            <div className="react-project-content">
              <img src={ReactCalculator} alt="React Calculator" className="react-project-image" />
              <div className="overlay">
                <div className="react-project-info">
                  <h3>React Calculator</h3>
                  <p>A responsive React calculator for basic arithmetic operations with a sleek, intuitive interface.</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/ToDo" className="react-project-item">
            <div className="react-project-content">
              <img src={ReactToDo} alt="React ToDo" className="react-project-image" />
              <div className="overlay">
                <div className="react-project-info">
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

export default ReactSkillPage;