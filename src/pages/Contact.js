import React from "react";
import Navbar from "../components/Navbar"; 
import "../css/Contact.css";
import contactBg from "../images/2-1.png"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* Contact Banner */}
      <div className="contact-banner">
        <img src={contactBg} alt="Contact Us" className="contact-image" />
        <div className="contact-overlay">
          <h1>Contact us</h1>
          <p>Home ▸ Contact us</p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h4>Let’s Connect And Talk About The Growth Of Your Business</h4>
          <p>
            As the top digital marketing agency prioritizing client ROI, we
            firmly believe in mutual commitment. We invest time to comprehend
            your needs and provide the best solutions.
          </p>

          {/* Contact Details */}
          <div className="contact-details">
            <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <div>
                <h4>LOCATION</h4>
                <p>ITHUM TOWER, A-153, Tower B, 5th Floor, Noida, UP, 201309</p>
              </div>
            </div>

            <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <div>
                <h4>CALL US</h4>
                <p>+91 7980282056</p>
                <p>+19295782749</p>
              </div>
            </div>

            <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <div>
                <h4>EMAIL US</h4>
                <p>leo@escortmarketing.agency</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <h3>Tell us about your project</h3>
          <p>Let’s discuss your project and find out what we can do to provide value.</p>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Enter Website URL" required />
            <textarea placeholder="Describe Your Requirement"></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
