// src/Home.js

import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="rectangle"></div>
      <h1 className="chris-curcio">Chris Curcio</h1>
      <div className="ellipse"></div>
      <nav>
        <a href="/" className="nav-link" style={{ left: '734px', top: '219px' }}>Home</a>
        <a href="/about" className="nav-link" style={{ left: '865px', top: '219px' }}>About</a>
        <a href="/projects" className="nav-link" style={{ left: '1003px', top: '219px' }}>Projects</a>
        <a href="/contact" className="nav-link" style={{ left: '1150px', top: '219px' }}>Contact</a>
      </nav>
      <div className="button">Contact</div>
      <div className="projects"></div>
      <p className="description">
        Explore my projects built with React and JavaScript, featuring detailed Figma UX/UI designs.
      </p>
    </div>
  );
}

export default Home;
