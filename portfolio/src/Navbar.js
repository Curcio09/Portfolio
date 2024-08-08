import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure this is correctly imported

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-header">
          <span className="name-white">Chris</span><span className="name-grey">Curcio</span>
        </h1>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;