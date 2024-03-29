import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="main-navdiv sticky">
      <Link to='/'>
      <img src={Logo} alt="" className="logo" />
      </Link>
      <input type="checkbox" name="" id="nav-toggler" className="fas fa-bars" />
      <nav className="navbar">
        <a data-text="home">
          <Link to='/'>Home</Link>          
        </a>
        <a href="#" data-text="se03">
        <Link to='/SE03'>se03</Link>
        </a>
        <a href="#" data-text="se03 max">
        <Link to='/SE03MAX'>se03 max</Link>
        </a>
        <a href="#" data-text="se03 lite">
        <Link to='/SE03LITE'>se03 lite</Link>
        </a>
        <a href="#" data-text="compare">
        <Link to='/'>compare</Link>
        </a>
        <a href="#" data-text="about">
        <Link to='/About'>about</Link> 
        </a>
        <a href="#" data-text="contact">
        <Link to='/Contact'>contact</Link>
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
