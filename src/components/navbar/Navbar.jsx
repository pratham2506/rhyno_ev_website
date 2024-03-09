import React from "react";
import "./Navbar.css";
import Logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <div className="hori-bar">
      <img src={Logo} alt="" />
      <input type="checkbox" name="" id="nav-toggler" className="fas fa-bars" />

      <nav className="navbar">
        <a href="#" data-text="home">
          home
        </a>
        <a href="#" data-text="about">
          about
        </a>
        <a href="#" data-text="services">
          services
        </a>
        <a href="#" data-text="blogs">
          blogs
        </a>
        <a href="#" data-text="contact">
          contact
        </a>
        <div className="background-image"></div>
      </nav>
    </div>
  );
};

export default Navbar;
