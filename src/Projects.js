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
          <img src={ReactCalculator} alt="React Calculator" className="project-calc" />
        </Link>
        <Link to="/ToDo" className="project-item">
          <img src={ReactToDo} alt="React ToDo" className="project-todo" />
        </Link>
        <Link to="/Python" className="project-item">
          <img src={Python} alt="Python" className="project-python" />
        </Link>
        <Link to="/Bank" className="project-item">
          <img src={Bank} alt="Bank" className="project-bank" />
        </Link>
        <Link to="/Form" className="project-item">
          <img src={Form} alt="Form" className="project-form" />
        </Link>
        <Link to="Figma/" className="project-item">
          <img src={Figma} alt="Figma" className="project-figma" />
        </Link>
      </div>     
    </div>
  );
}

export default Projects;