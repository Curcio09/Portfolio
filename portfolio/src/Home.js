import React from 'react';
import './Home.css';
import placeImage from './place.png'; // Import the image here

function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>I'm Chris Curcio</h1>
        <p>Front-end developer and UX/UI designer.</p>
        <button>Contact</button>
      </div>
      <div className="home-image">
        <img src={placeImage} alt="Chris Curcio" /> {/* Use the imported image */}
      </div>
    </div>
  );
}

export default Home;