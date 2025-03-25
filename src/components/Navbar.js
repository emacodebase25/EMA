import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";
import usFlag from "../images/uk.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedin, faSkype } from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";

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
      
      <a href="https://escortmarketing.agency/sitemap.rss" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faRss} className="icon" />
      </a>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "navbar scrolled" : "navbar"}>
      {!isScrolled && (
        <div className="top-navbar">
          <span className="phone-number">
            <img src={usFlag} alt="US Flag" className="flag-icon" /> +19295782749
          </span>
          <select className="language-selector">
            <option>English</option>
            <option>Spanish</option>
          </select>
          <SocialIcons />
        </div>
      )}
      <div className="main-navbar">
        <img src={logo} alt="Escort Marketing" className="logo" />
        <nav>
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
          <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li
              className="dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link to="#">Services ▾</Link>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/adult-seo">Adult SEO</Link></li>
                  <li><Link to="/adult-ecommerce-seo">Adult E-Commerce SEO</Link></li>
                  <li><Link to="/escort-seo">Escort SEO</Link></li>
                  <li><Link to="/escort-social-media-marketing">Escort Social Media Marketing</Link></li>
                  <li><Link to="/adult-android-app-development">Adult Android App Development Agency</Link></li>
                  <li><Link to="/adult-content-writing">Adult Content Writing</Link></li>
                  <li><Link to="/strippers-seo">Strippers SEO</Link></li>
                  <li><Link to="/adult-dating-seo">Adult Dating SEO</Link></li>
                  <li><Link to="/adult-webcams-seo">Adult Webcams SEO</Link></li>
                  <li><Link to="/porn-star-seo">Porn Star SEO</Link></li>
                  <li><Link to="/tube-seo">Tube SEO</Link></li>
                  <li><Link to="/erotic-massage-seo">Erotic Massage SEO</Link></li>
                  <li><Link to="/brothel-seo">Brothel SEO</Link></li>
                  <li><Link to="/adult-link-building">Adult Link Building</Link></li>
                  <li><Link to="/adult-web-design">Adult Web Design</Link></li>
                  <li><Link to="/independent-escort-seo">Independent Escort SEO</Link></li>
                  <li><Link to="/escort-directory-seo">Escort Directory SEO</Link></li>
                </ul>
              )}
            </li>
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
