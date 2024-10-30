import React from 'react';
import { Link } from 'react-router-dom';
import './SkillSQL.css';
import SQLDatabase from './img/Library.png';

function SQLSkillPage() {
  return (
    <div className="sql-skill-container">
      <h2 className="sql-skill-header">SQL</h2>
      <p className="sql-skill-intro">
        SQL is essential for managing and manipulating relational databases. Through my coursework, I have developed a strong foundation in SQL, mastering commands for data querying, updating, and schema design. I have used SQL to create, retrieve, and manage data across several projects, providing insights and structured solutions to complex data problems.
      </p>

      {/* Projects Section */}
      <section className="sql-projects">
        <h2 className="sql-projects-header">Projects</h2>
        <div className="sql-projects-grid">
          <Link to="/SQLDatabaseProject" className="sql-project-item">
            <div className="sql-project-content">
              <img src={SQLDatabase} alt="SQL Database Project" className="sql-project-image" />
              <div className="sql-overlay">
                <div className="sql-project-info">
                  <h3>Library Management</h3>
                  <p>A SQL-based system to manage books, authors, borrowers, and loans, showcasing relational database design and complex queries.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Back Button */}
      <div className="sql-back-button-container">
        <Link to="/about">
          <button className="sql-back-button">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default SQLSkillPage;