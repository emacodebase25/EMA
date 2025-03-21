import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";
import usFlag from "../images/uk.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedin, faSkype } from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";



// Social Icons Component
const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="icon" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
      <a href="https://skype.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faSkype} className="icon" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faRss} className="icon" />
      </a>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "navbar scrolled" : "navbar"}>
      {/* Top Navbar */}
      {!isScrolled && (
        <div className="top-navbar">
          <span className="phone-number">
            <img src={usFlag} alt="US Flag" className="flag-icon" /> +19295782749
          </span>
          <select className="language-selector">
            <option>English</option>
            <option>Spanish</option>
          </select>
          <SocialIcons /> {/* Correctly calling the SocialIcons component */}
        </div>
      )}

      {/* Main Navbar */}
      <div className="main-navbar">
        <img src={logo} alt="Escort Marketing" className="logo" />
        <nav>
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
          <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Link to="/quote" className="quote-button">Get a Quote</Link>
      </div>
    </header>
  );
};

export default Navbar;
