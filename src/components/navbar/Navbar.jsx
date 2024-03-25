import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  
  return (
    <div className="main-navdiv sticky">
      <img src={Logo} alt="" className="logo" />
      <input type="checkbox" name="" id="nav-toggler" className="fas fa-bars" />
      <nav className="navbar">
        <a href="#" data-text="home">
          Home
        </a>
        <a href="#" data-text="se03">
          se03
        </a>
        <a href="#" data-text="se03 max">
          se03 max
        </a>
        <a href="#" data-text="se03 lite">
          se03 lite
        </a>
        <a href="#" data-text="compare">
          compare
        </a>
        <a href="#" data-text="about">
          about 
        </a>
        <a href="#" data-text="contact">
          contact
        </a>
        <div className="background-image"></div>
        <div className="social">
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
