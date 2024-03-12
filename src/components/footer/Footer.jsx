import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="ft-maindiv">
        <h2>Let's connect and collaborate</h2>
        <div className="ft-links">
          <div className="ft-mails">
            <small>Skype Us</small>
            <p>sales.techcompose</p>

            <small>Email</small>
            <p>info@example.com</p>

            <small>Call on</small>
            +91 00000000000
          </div>
          <div className="ft-add">
            <small>Visit us</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, odio.</p>
          </div>
          <div className="ft-lets">
            <small>Lets connect</small>
            <p>Drop a Message <i class="fas fa-chevron-right"></i></p>
          </div>
        </div>

        <div className="ft-quick">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </div>
        <p>COpyright</p>
      </div>
    </div>
  )
}

export default Footer
