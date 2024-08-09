import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-header">
          <span className="name-white">Chris</span><span className="name-grey">Curcio</span>
        </h1>
        <div className="navbar-links">
          <Link to="/" className={`nav-link ${active === '/' ? 'active' : ''}`} onClick={() => setActive('/')}>Home</Link>
          <Link to="/about" className={`nav-link ${active === '/about' ? 'active' : ''}`} onClick={() => setActive('/about')}>About</Link>
          <Link to="/projects" className={`nav-link ${active === '/projects' ? 'active' : ''}`} onClick={() => setActive('/projects')}>Projects</Link>
          <Link to="/contact" className={`nav-link ${active === '/contact' ? 'active' : ''}`} onClick={() => setActive('/contact')}>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;