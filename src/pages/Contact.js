import React from "react";
import Navbar from "../components/Navbar"; 
import "../css/Contact.css";
import contactBg from "../images/2-1.png"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

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
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Enter Website URL" />
            <textarea placeholder="Describe Your Requirement"></textarea>

            <div className="right-sidebar">
              <div className="help-list">
        <h2>HOW CAN WE HELP YOU?</h2>
        <FormGroup>
          <FormControlLabel control={<Checkbox  />} label="Adult SEO" />
          <FormControlLabel control={<Checkbox />} label="Adult E-Commerce SEO" />
          <FormControlLabel control={<Checkbox />} label="Escort SEO" />
          <FormControlLabel control={<Checkbox />} label="Escort Social Media Marketing" />
          <FormControlLabel control={<Checkbox />} label="Adult Android App Development Agency" />
          <FormControlLabel control={<Checkbox />} label="Adult Content Writing" />
          <FormControlLabel control={<Checkbox />} label="Strippers SEO" />
          <FormControlLabel control={<Checkbox />} label="Adult Dating SEO" />
          <FormControlLabel control={<Checkbox />} label="Adult Webcams SEO" />
          <FormControlLabel control={<Checkbox />} label="Porn Star SEO" />
          <FormControlLabel control={<Checkbox />} label="Tube SEO" />
          <FormControlLabel control={<Checkbox />} label="Erotic Massage SEO" />
          <FormControlLabel control={<Checkbox />} label="Brothel SEO" />
          <FormControlLabel control={<Checkbox />} label="Adult Link Building" />
          <FormControlLabel control={<Checkbox />} label="Adult Web Design" />
          <FormControlLabel control={<Checkbox />} label="Independent Escort SEO" />
          <FormControlLabel control={<Checkbox />} label="Escort Directory SEO" />
        </FormGroup>
      </div>
      <div className="budget-list">
        <h2>MONTHLY BUDGET (EST.)</h2>
        <FormGroup>
          <FormControlLabel control={<Checkbox  />} label=" UPTO $400" />
          <FormControlLabel control={<Checkbox />} label="$400-$800" />
          <FormControlLabel control={<Checkbox />} label="$800-$1200" />
          <FormControlLabel control={<Checkbox />} label="$1200-$1600" />
          <FormControlLabel control={<Checkbox />} label="$1600-$2000" />
          <FormControlLabel control={<Checkbox />} label="$2000-$3000" />
          <FormControlLabel control={<Checkbox />} label="$3000-$6000" />
          <FormControlLabel control={<Checkbox />} label="$6000-$8000" />
          <FormControlLabel control={<Checkbox />} label="$8000-$17000" />
          <FormControlLabel control={<Checkbox />} label="$17000-$58000" />
          <FormControlLabel control={<Checkbox />} label="$58000 AND ABOVE" />
        </FormGroup>
        
        </div>

        <div className="budget-list">
        <h2>When would you like to start with this Project?</h2>
        <FormGroup>
          <FormControlLabel control={<Checkbox  />} label=" ASAP" />
          <FormControlLabel control={<Checkbox />} label="1-2 WEEKS" />
          <FormControlLabel control={<Checkbox />} label="2-4 WEEKS" />
          <FormControlLabel control={<Checkbox />} label="1-2 MONTHS" />
          <FormControlLabel control={<Checkbox />} label="+2 MONTHS(JUST EXPLORING)" />
        </FormGroup>
        
        </div>
      </div>


            <button type="submit">SEND</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
