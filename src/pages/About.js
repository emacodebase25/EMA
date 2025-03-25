import React from "react";
import "../css/About.css"; // Make sure this file exists for styling
import aboutImage from "../images/escort-banner.jpg";

const About = () => {
    return (
        <div className="about-section">
            {/* Banner Section */}
            <div className="about-banner">
                <img src={aboutImage} alt="About Us" className="about-banner-image" />
                <div className="about-overlay">
                    <h1 className="about-title">About us</h1>
                    <p className="about-breadcrumb">Home &gt; About Us</p>
                </div>
            </div>

            {/* New Content Section */}
            <div className="about-content">
                <h2>GIVE YOUR ADULT WEBSITE AN EDGE WITH RELIABLE ESCORT WEBSITE MARKETING</h2>
                <p>
                    There is a lot being said about the term <b>'online adult entertainment'</b>, 
                    but the commanding force of Search Engine Optimization (<b>SEO</b>) reigns supreme. 
                    Luck alone isn't the key to success here—rather, it's the mastery of <b>SEO techniques</b> 
                    that propels businesses to the forefront and takes them to the pinnacle of success. 
                    Unlocking the potential of <b>escort SEO</b> has been instrumental in the ascent of 
                    numerous businesses, guiding them toward unprecedented success. It's not merely about chance; 
                    it's about strategically positioning oneself in the digital world, and that's where the prowess 
                    of <b>adult SEO</b> truly comes into power.
                </p>

                <p>
                    This is the destination for those seeking experts well-versed in optimizing adult sites. 
                    <b> Escort website marketing</b> is equipped with the expertise to help you surge in the 
                    intricate world of <b>adult SEO</b>, facilitating businesses to rise, thrive, and secure 
                    coveted positions atop search engine rankings.
                </p>

                <p>
                    We rose to prominence with our top-notch performance among the competitive 
                    <b> SEO for escort agencies!</b> We're not just a team; we're your dream-makers, 
                    dedicated to transforming your aspirations into inspiring online accomplishments. 
                    At <b>Escort Marketing Agency</b>, we're built with a wealth of hands-on expertise 
                    to elevate your website through strategic optimization.
                </p>

                <p>
                    We're not merely promising value for your investment; we're guaranteeing an 
                    <b> ROI</b> you can cherish. Partnering with us isn't just an association; it's 
                    the beginning of unlocking unparalleled success for your online presence. 
                    Give our <b>escort website SEO</b> an opportunity to make you thrive in the 
                    competitive online sphere.
                </p>

                <p>
                    SEO for adult websites can unlock the <b>true potential of your business</b>, 
                    disseminating various opportunities for growth. Entrusting us with the task of 
                    boosting your adult business can soon turn into a reality that you might not have 
                    witnessed with anyone else.
                </p>

                {/* Mission Section */}
                <h2 className="about-heading">OUR MISSION</h2>
                <p>
                    At <b>Escort Marketing Agency</b>, our goal is to take your adult brand to 
                    new heights. We focus on <b>smart marketing</b> that speaks to your audience 
                    and drives <b>real growth</b> in the adult entertainment world. We aim to create 
                    memorable experiences that stand out in this competitive market.
                </p>

                {/* Extraordinary Experiences Section */}
                <h2 className="about-heading">Extraordinary Experiences</h2>
                <p>
                    Join us for an adventure of extraordinary experiences at <b>Escort Marketing</b>. 
                    Our team is all about crafting exciting and engaging campaigns for the adult industry. 
                    We love pushing the boundaries to make sure your adult brand shines in this diverse 
                    and ever-changing market.
                </p>

                {/* Our Core Values Section */}
                <h2 className="about-heading">Our Core Values</h2>
                <p><b>At Escort Marketing Agency, we stick to important values tailored for the adult industry:</b></p>

                <ul className="about-values">
                    <li> <b>Innovation and Freedom:</b> We're all about new ideas and freedom in creating solutions that make your 
                        adult brand unique in this competitive industry.</li>
                    <li> <b>Navigating Digital Waves:</b> We understand the ins and outs of the digital world in the adult industry, 
                        making sure your brand can roll with the changes and stay strong.</li>
                    <li> <b>Strength in Change:</b> We're here to help your brand stay strong and successful, adapting to 
                        shifts in the adult entertainment scene and turning challenges into opportunities.</li>
                </ul>
            </div>

            {/* Contact & Why Choose Us Section */}
            <div className="contact-why-section">
                {/* Contact Form */}
                <div className="contact-form">
                    <h2>Tell us about your project</h2>
                    <p>Let's discuss your project and find out what we can do to provide value.</p>

                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Enter Your Name Here" />
                            <input type="text" placeholder="Phone Number" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="abc@gmail.com" />
                            <select>
                                <option>—Please choose an option—</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Your Budget" />
                            <input type="text" placeholder="Enter URL" />
                        </div>
                        <select>
                            <option>—Please choose an option—</option>
                        </select>
                        <div className="form-group">
                        <textarea className="textarea" placeholder="Describe Your Requirement"></textarea>
                        </div>
                        <button type="submit">SEND</button>
                        
                    </form>
                </div>

                {/* Why Choose Us Section */}
                <div className="why-choose-us">
                    <h2>Why Choose Us</h2>
                    <p>We are a renowned leading and trustworthy SEO agency worldwide that helps adult and escort businesses to grow their online traffic with proven
                      SEO strategies for your adult and escort website.
                      Choosing our services will be the right decision. We offer specialized expertise and targeted strategies that are essential to thrive in a highly competitive adult industry:
                    </p>
                    <p>Our Adult and Escort SEO experts have deep knowledge of latest SEO techniques. We understand the unique challenges and regulations that allow us to implement strategies to effectively reach the audience. When you contact our experts you can avail services of escort SEO, escort social media marketing, adult dating SEO, adult android app development services, strippers SEO, adult e-commerce SEO, brothel SEO, adult webcam SEO, adult content writing, etc. For those individuals who are seeking escort SEO services to rank high in the search engine must get in touch with our highly dedicated professionals who are just a click away from you. Our SEO services will help you surge in this intricate world of adult escort SEO so reach us anytime.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
