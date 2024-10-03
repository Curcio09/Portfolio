import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-header">
          <span className="name-white">Chris</span><span className="name-grey">Curcio</span>
        </h1>
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${active === '/' ? 'active' : ''}`} onClick={() => { setActive('/'); setMenuOpen(false); }}>Home</Link>
          <Link to="/about" className={`nav-link ${active === '/about' ? 'active' : ''}`} onClick={() => { setActive('/about'); setMenuOpen(false); }}>About</Link>
          <Link to="/projects" className={`nav-link ${active === '/projects' ? 'active' : ''}`} onClick={() => { setActive('/projects'); setMenuOpen(false); }}>Projects</Link>
          <Link to="/contact" className={`nav-link ${active === '/contact' ? 'active' : ''}`} onClick={() => { setActive('/contact'); setMenuOpen(false); }}>Contact</Link>
        </div>
        <div className="hamburger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;