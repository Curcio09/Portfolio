import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import ReactCalculator from './React calculator.png';
import ReactToDo from './React to-do.png';
import Python from './Python.png';
import Bank from './Bank.png';
import Form from './Form.png';
import Figma from './Figma.png';

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        <Link to="/ReactCalculator" className="project-item">
          <div className="project-content">
            <img src={ReactCalculator} alt="React Calculator" className="project-image" />
            <div className="overlay">
              <div className="project-info">
                <h3>React Calculator</h3>
                <p>A responsive React calculator for basic arithmetic operations with a sleek, intuitive interface.</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/ToDo" className="project-item">
          <div className="project-content">
            <img src={ReactToDo} alt="React ToDo" className="project-image" />
            <div className="overlay">
              <div className="project-info">
                <h3>To-Do List</h3>
                <p>A versatile React to-do list app for managing tasks efficiently with a clean, user-friendly design.</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/Python" className="project-item">
          <div className="project-content">
            <img src={Python} alt="Python" className="project-image" />
            <div className="overlay">
              <div className="project-info">
                <h3>Python Chatbot</h3>
                <p>A basic chatbot for interactive user experience, demonstrating natural language processing skills.</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/Bank" className="project-item">
          <div className="project-content">
            <img src={Bank} alt="Bank" className="project-image" />
            <div className="overlay">
              <div className="project-info">
                <h3>Java Banking</h3>
                <p>A basic Java banking system for managing accounts and transactions.</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/Form" className="project-item">
          <div className="project-content">
            <img src={Form} alt="Form" className="project-image" />
            <div className="overlay">
              <div className="project-info">
                <h3>Bootstrap Form</h3>
                <p>A basic form to create an account, demonstrating Bootstrap, HTML, and CSS skills.</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="Figma/" className="project-item">
          <div className="project-content">
            <img src={Figma} alt="Figma" className="project-image" />
            <div className="overlay">
              <div className="project-info">
                <h3>Figma Design</h3>
                <p>The Figma design used to create this portfolio website, showcasing design and prototyping skills.</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
