import React from "react";
import "./Footer.css";
import logo from "../images/logo_foot.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src={logo} alt="Escort Marketing" className="logo" />
        <p>SEO for adult websites to unlock the true potential of your business.</p>
        <p>Email: support@escortmarketing.agency</p>
        <p>Phone: +19295782749</p>

        <div className="footer-links">
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>About</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="services">
            <h3>Services</h3>
            <ul>
              <li>Adult SEO</li>
              <li>Escort SEO</li>
              <li>Social Media Marketing</li>
              <li>Content Writing</li>
            </ul>
          </div>

          <div className="social-media">
            <h3>Follow Us</h3>
            <ul>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>

      {/* NEW SEO SERVICES SECTION BELOW THE FOOTER BUT INSIDE */}
      <div className="global-seo-services">
        <h2>SEO Services for Global Community</h2>
        <div className="seo-list">
          <ul>
            <li>Adult SEO Services Philippines</li>
            <li>Adult SEO Services Portugal</li>
            <li>Adult SEO Services Panama</li>
            <li>Adult SEO Services Greece</li>
            <li>Adult SEO Services South Korea</li>
            <li>Adult SEO Services Thailand</li>
            <li>Adult SEO Services Poland</li>
          </ul>

          <ul>
            <li>Adult SEO Services Montenegro</li>
            <li>Adult SEO Services Malta</li>
            <li>Adult SEO Services Peru</li>
            <li>Adult SEO Services Turkey</li>
            <li>Adult SEO Services Switzerland</li>
            <li>Adult SEO Services Italy</li>
            <li>Adult SEO Services New Zealand</li>
          </ul>

          <ul>
            <li>Adult SEO Services Slovenia</li>
            <li>Adult SEO Services Lebanon</li>
            <li>Adult SEO Services Indonesia</li>
            <li>Adult SEO Services India</li>
            <li>Adult SEO Services Brazil</li>
            <li>Adult SEO Services Singapore</li>
            <li>Adult SEO Services Japan</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
