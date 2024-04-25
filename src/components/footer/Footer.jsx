import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <div>
      <div className="ft-maindiv">
        <div className="ft-paddiv">
          <h2>Let's connect and collaborate</h2>
          <div className="ft-links">
            <div className="ft-mails">
              <small>Email</small>
              <p><a href="">info@rhyno.in</a></p>

              <small>Call on</small>
              <p><a href="">+91 9023987528</a></p>
            </div>
            <div className="ft-add">
              <small>Visit us</small>
              <p>RHYNO Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</p>
            </div>
            <div className="ft-lets">
              <small>Lets connect</small>
              <p><a href="mailto:info@rhyno.in" onClick={handleClick}>Drop a Message <i className="fas fa-chevron-right"></i></a></p>
            </div>
          </div>

          <small>Quick Links</small>
          <div className="ft-quick">
            <Link to='/Privacy' onClick={handleClick}><li>Privacy Policy</li></Link>
            <Link to='/Contact' onClick={handleClick}><li>Contact Us</li></Link>
            <li>Careers</li>
            <Link to='/Rentals' onClick={handleClick}><li>Rentals</li></Link>
          </div>
          <p>Copyright &copy; 2024 RHYNO Wheels Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
