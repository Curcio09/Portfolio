import React from 'react';
import './Contact.css';
import EmailIcon from './Email.png';
import GithubIcon from './GitHub.png';
import MobileIcon from './Mobile.png';
import LinkedInIcon from './LinkedIn.png';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <form className="contact-form">
        <input type="text" placeholder="Enter Name" className="contact-input" />
        <input type="email" placeholder="Enter Email" className="contact-input" />
        <textarea className="contact-message"></textarea>
        <button type="submit" className="contact-submit">Submit</button>
      </form>
      <div className="social-icons">
        <a href="mailto:christopherjamescurcio@gmail.com">
          <img src={EmailIcon} alt="Email Icon" />
        </a>
        <a href="tel:+15853751063">
          <img src={MobileIcon} alt="Phone Icon" />
        </a>
        <a href="https://www.linkedin.com/in/chris-curcio-57a415213/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn Icon" />
        </a>
        <a href="https://github.com/Curcio09?tab=repositories" target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} alt="GitHub Icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;