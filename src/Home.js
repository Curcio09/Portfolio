import React from 'react';
import './Home.css';
import './HomeMobile.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import placeImage from './place.png';
import Ellipse from './Ellipse.svg';
import project from './project.png';

function Home() {
  return (
    <div className="homeGrid">
      <div className="oneOne">
        <p>
        I'm&nbsp;<span className="highlight-name">Chris Curcio</span><br/>
          Front-end developer and<br />
          UX/UI designer.
        </p>
        {/* Link to Contact Page */}
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
      <div className="oneTwo">
        <div className="image-container">
          <img src={Ellipse} alt="Ellipse Background" className="ellipse" />
          <img src={placeImage} alt="Chris Curcio" className="profile-image" />
        </div>
      </div>

      <div className="twoOne">
        <img src={project} alt="Project" />
      </div>
      <div className="twoTwo">
        <p>Explore my projects built <br/> with React and JavaScript, <br/>
          Featuring detailed Figma <br/> UX/UI designs.</p>
        {/* Link to Projects Page */}
        <Link to="/projects">
          <button>Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;