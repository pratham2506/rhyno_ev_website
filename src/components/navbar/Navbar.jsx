import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className={`main-navdiv sticky ${isOpen ? "open" : ""}`}>
      <Link to='/' onClick={closeNavbar}>
        <img src={Logo} alt="" className="logo" />
      </Link>
      <input
        type="checkbox"
        name=""
        id="nav-toggler"
        className="fas fa-bars"
        checked={isOpen}
        onChange={handleToggle}
      />
      <nav className="navbar">
        <a data-text="home">
          <Link to='/' onClick={closeNavbar}>Home</Link>
        </a>
        <a href="#" data-text="se03">
          <Link to='/SE03' onClick={closeNavbar}>se03</Link>
        </a>
        <a href="#" data-text="se03 max">
        <Link to='/SE03MAX' onClick={closeNavbar}>se03 max</Link>
        </a>
        <a href="#" data-text="se03 lite">
        <Link to='/SE03LITE' onClick={closeNavbar}>se03 lite</Link>
        </a>
        <a href="#" data-text="compare">
        <Link to='/' onClick={closeNavbar}>compare</Link>
        </a>
        <a href="#" data-text="about">
        <Link to='/About' onClick={closeNavbar}>about</Link> 
        </a>
        <a href="#" data-text="contact">
        <Link to='/Contact' onClick={closeNavbar}>contact</Link>
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
