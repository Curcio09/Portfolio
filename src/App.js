import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import ReactSkillPage from './SkillReact';
import JavaScriptSkillPage from './SkillJavaScript';
import PythonSkillPage from './SkillPython';
import JavaSkillPage from './SkillJava';
import FigmaSkillPage from './SkillFigma';
import GitHubSkillPage from './SkillGitHub';
import PHPSkillPage from './SkillPHP';
import BootstrapSkillPage from './SkillBootstrap';
import HTMLCSSSkillPage from './SkillHTML';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-container">
          <Navbar /> {}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills/react" element={<ReactSkillPage />} />
            <Route path="/skills/javascript" element={<JavaScriptSkillPage />} />
            <Route path="/skills/python" element={<PythonSkillPage />} />
            <Route path="/skills/java" element={<JavaSkillPage />} />
            <Route path="/skills/figma" element={<FigmaSkillPage />} />
            <Route path="/skills/github" element={<GitHubSkillPage />} />
            <Route path="/skills/php" element={<PHPSkillPage />} />
            <Route path="/skills/bootstrap" element={<BootstrapSkillPage />} />
            <Route path="/skills/html-css" element={<HTMLCSSSkillPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;