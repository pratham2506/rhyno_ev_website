import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="ft-maindiv">
        <div className="ft-paddiv">
        <h2>Let's connect and collaborate</h2>
        <div className="ft-links">
          <div className="ft-mails">
            <small>Skype Us</small>
            <p><a href="">sales.techcompose</a></p>

            <small>Email</small>
            <p><a href="">info@example.com</a></p>

            <small>Call on</small>
            <p><a href="">+91 00000000000</a></p>
          </div>
          <div className="ft-add">
            <small>Visit us</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, odio.</p>
          </div>
          <div className="ft-lets">
            <small>Lets connect</small>
            <p><a href="">Drop a Message <i class="fas fa-chevron-right"></i></a></p>
          </div>
        </div>

          <small>Quick Links</small>
        <div className="ft-quick">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </div>
        <p>Copyright &copy; 2024 Rhyno Wheels Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
