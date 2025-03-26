import React from "react";
import "./Footer.css";
import logo from "../images/logo_foot.png";
import BlogSection from "./BlogSection"; // Import Blog Section

const Footer = () => {
  return (
    <>
      {/* Add Blog Section Here */}
      <BlogSection /> 

      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <img src={logo} alt="Escort Marketing" className="footer-logo" />
            <p className="footer-description">
              SEO for adult websites can unlock the true potential of your
              business, disseminating various opportunities for growth.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📍</span>
                ITHUM TOWER, A-153, Tower B, 5 Floor, Noida, UP, 201309
              </div>
              <div className="contact-item">
                <span className="icon">📧</span>
                <a href="mailto:leo@escortmarketing.agency">
                  leo@escortmarketing.agency
                </a>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                +19295782749
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h3>Quick Links</h3>
              <ul>
                <li>About</li>
                <li>FAQ</li>
                <li>Blog</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Portfolio</li>
                <li>Guest Blogging Guidelines</li>
                <li>Referral</li>
                <li>Important Update Regarding Scammers</li>
                <li>Sitemap</li>
                <li>Privacy Policy</li>
                <li>Request Free SEO Analysis</li>
                <li>Social Feed</li>
              </ul>
            </div>

            <div>
              <h3>Services</h3>
              <ul>
                <li>Adult SEO</li>
                <li>Adult E-Commerce SEO</li>
                <li>Escort SEO</li>
                <li>Escort Social Media Marketing</li>
                <li>Adult Android App Development Agency</li>
                <li>Adult Content Writing</li>
                <li>Strippers SEO</li>
                <li>Adult Dating SEO</li>
                <li>Adult Webcams SEO</li>
                <li>Porn Star SEO</li>
                <li>Tube SEO</li>
                <li>Erotic Massage SEO</li>
                <li>Brothel SEO</li>
                <li>Adult Link Building</li>
                <li>Adult Web Design</li>
                <li>Independent Escort SEO</li>
                <li>Escort Directory SEO</li>
              </ul>
            </div>

            <div>
              <h3>Follow Us</h3>
              <ul>
                <li>X (Twitter)</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Skype</li>
                <li>RSS</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SEO Services Section */}
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
              <li>Adult SEO Services Hungary</li>
              <li>Adult SEO Services Bulgaria</li>
              <li>Adult SEO Services Spain</li>
              <li>Adult SEO Services Denmark</li>
              <li>Adult SEO Services Sweden</li>
              <li>Adult SEO Services Luxembourg</li>
              <li>Adult SEO Services Tanzania</li>
              <li>Adult SEO Services USA</li>
            </ul>

            <ul>
              <li>Adult SEO Services Montenegro</li>
              <li>Adult SEO Services Malta</li>
              <li>Adult SEO Services Peru</li>
              <li>Adult SEO Services Turkey</li>
              <li>Adult SEO Services Switzerland</li>
              <li>Adult SEO Services Italy</li>
              <li>Adult SEO Services New Zealand</li>
              <li>Adult SEO Services Finland</li>
              <li>Adult SEO Services Belgium</li>
              <li>Adult SEO Services Romania</li>
              <li>Adult SEO Services Russia</li>
              <li>Adult SEO Services Ireland</li>
              <li>Adult SEO Services Netherlands</li>
              <li>Adult SEO Services Uruguay</li>
            </ul>

            <ul>
              <li>Adult SEO Services Slovenia</li>
              <li>Adult SEO Services Lebanon</li>
              <li>Adult SEO Services Indonesia</li>
              <li>Adult SEO Services India</li>
              <li>Adult SEO Services Brazil</li>
              <li>Adult SEO Services Singapore</li>
              <li>Adult SEO Services Japan</li>
              <li>Adult SEO Services Estonia</li>
              <li>Adult SEO Services Austria</li>
              <li>Adult SEO Services Germany</li>
              <li>Adult SEO Services Canada</li>
              <li>Adult SEO Services China</li>
              <li>Adult SEO Services Australia</li>
              <li>Adult SEO Services Armenia</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
