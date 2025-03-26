import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../css/Pricing.css"; 
import pricingBg from "../images/escort-banner.jpg"; 

const packagesData = {
    "Independent Escort SEO Package": [
    { title: "LOW COMPETITION", features: ["✅ Keyword Research", "✅ No. of keywords/Phares: 10", "✅ Competitor Analysis","✅ Website Audit","✅ Backlink Audit","✅ Content Audit","✅ 4 Months SEO Plans & Targets", "✅ On-page & Off-page SEO", "✅ Up to 3000 words P/M", "✅ Technical SEO", "✅ SEO Website Development", "✅ Analytics and Reporting", "✅ Dedicated SEO Account Manager"] },
    { title: "PROFESSIONAL", features: ["✅ Keyword Research", "✅ No. of keywords/Phares: 15", "✅ Competitor Analysis","✅ Website Audit","✅ Backlink Audit","✅ Content Audit","✅ 5 Months SEO Plans & Targets", "✅ On-page & Off-page SEO", "✅ Up to 4000 words P/M", "✅ Technical SEO", "✅ SEO Website Development", "✅ Analytics and Reporting", "✅ Dedicated SEO Account Manager"]},
    { title: "ENTERPRISE", features: ["✅ Keyword Research", "✅ No. of keywords/Phares: 25", "✅ Competitor Analysis","✅ Website Audit","✅ Backlink Audit","✅ Content Audit","✅ 6 Months SEO Plans & Targets", "✅ On-page & Off-page SEO", "✅ Up to 5000 words P/M", "✅ Technical SEO", "✅ SEO Website Development", "✅ Analytics and Reporting", "✅ Dedicated SEO Account Manager"]},
  ],
  "Escort Agency SEO Package": [
    { title: "LOW COMPETITION", features: ["✅ Keyword Research", "✅ No. of keywords: 55", "✅ Competitor Analysis","✅ Website Audit","✅ Backlink Audit","✅ Content Audit","✅ 4 Months SEO Plans & Targets", "✅ On-page & Off-page SEO", "✅ Up to 6000 words P/M", "✅ Technical SEO", "✅ SEO Website Development", "✅ Analytics and Reporting", "✅ Dedicated SEO Account Manager"] },
    { title: "PROFESSIONAL", features: ["✅ Keyword Research", "✅ No. of keywords: 75", "✅ Competitor Analysis","✅ Website Audit","✅ Backlink Audit","✅ Content Audit","✅ 5 Months SEO Plans & Targets", "✅ On-page & Off-page SEO", "✅ Up to 8000 words P/M", "✅ Technical SEO", "✅ SEO Website Development", "✅ Analytics and Reporting", "✅ Dedicated SEO Account Manager"]},
    { title: "ENTERPRISE", features: ["✅ Keyword Research", "✅ No. of keywords: 95", "✅ Competitor Analysis","✅ Website Audit","✅ Backlink Audit","✅ Content Audit","✅ 6 Months SEO Plans & Targets", "✅ On-page & Off-page SEO", "✅ Up to 10000 words P/M", "✅ Technical SEO", "✅ SEO Website Development", "✅ Analytics and Reporting", "✅ Dedicated SEO Account Manager"]},
  ],
  "Independent Escort SMM Package ": [
    { title: "LOW COMPETITION", features: ["✅ Social Media Content Strategy", "✅ 4 Managed Social Media Accounts", "✅ 16 Unique Posts per Account every week","✅ Fully managed solution","✅ Custom profile design","✅ Boosted Paid Posts*","✅ Monthly Reporting", "✅ Email support", "✅ Calls Included"] },
    { title: "PROFESSIONAL", features: ["✅ Social Media Content Strategy", "✅ 5 Managed Social Media Accounts", "✅ 20 Unique Posts per Account every week","✅ Fully managed solution","✅ Custom profile design","✅ Boosted Paid Posts*","✅ Monthly Reporting", "✅ Email support", "✅ Calls Included"]},
    { title: "ENTERPRISE", features: ["✅ Social Media Content Strategy", "✅ 9 Managed Social Media Accounts", "✅ 45 Unique Posts per Account every week","✅ Fully managed solution","✅ Custom profile design","✅ Boosted Paid Posts*","✅ Monthly Reporting", "✅ Email support", "✅ Calls Included"]},
  ],
  "Escort Agency SMM Package ": [
    { title: "LOW COMPETITION", features: ["✅ Social Media Content Strategy", "✅ 4 Managed Social Media Accounts", "✅ Unique Posts per Account every week as per Agency Size","✅ Fully managed solution","✅ Custom profile design","✅ Boosted Paid Posts*","✅ Monthly Reporting", "✅ Email support", "✅ Calls Included"] },
    { title: "PROFESSIONAL", features: ["✅ Social Media Content Strategy", "✅ 5 Managed Social Media Accounts", "✅ Unique Posts per Account every week as per Agency Size","✅ Fully managed solution","✅ Custom profile design","✅ Boosted Paid Posts*","✅ Monthly Reporting", "✅ Email support", "✅ Calls Included"]},
    { title: "ENTERPRISE", features: ["✅ Social Media Content Strategy", "✅ 9 Managed Social Media Accounts", "✅ Unique Posts per Account every week as per Agency Size","✅ Fully managed solution","✅ Custom profile design","✅ Boosted Paid Posts*","✅ Monthly Reporting", "✅ Email support", "✅ Calls Included"]},
  ],
  "Adult App Development": [
    { title: "SILVER", features: ["✅ Only Android Platform", "✅ Intuitive UI/UX design", "✅ Push notification","✅ Map Integration","✅ SMS/phone call integration","❌ No Analytics","❌ No Backend server development", "❌ No API integration"] },
    { title: "GOLD", features: ["✅ iOS/Android Platform", "✅ Intuitive UI/UX design", "✅ Push notification","✅ Map Integration","✅ SMS/phone call integration","✅ Analytics","✅ Backend server development", "❌ No API integration"] },
    { title: "PLATINUM", features: ["✅ iOS/Android Platform", "✅ Intuitive UI/UX design", "✅ Push notification","✅ Map Integration","✅ SMS/phone call integration","✅ Analytics","✅ Backend server development", "✅  API integration"]},
  ],
  "Adult SEO Package": [
    { title: "LOW COMPETITION", features: ["✅ Keyword Research", "✅ No. of keywords/Phares: 10", "✅ Competitor Analysis","✅ Website Audit","✅ Backlink Audit","✅ Content Audit","✅ 4 Months SEO Plans & Targets", "✅ On-page & Off-page SEO", "✅ Up to 3000 words P/M", "✅ Technical SEO", "✅ SEO Website Development", "✅ Analytics and Reporting", "✅ Dedicated SEO Account Manager"] },
    { title: "PROFESSIONAL", features: ["✅ Keyword Research", "✅ No. of keywords/Phares: 15", "✅ Competitor Analysis","✅ Website Audit","✅ Backlink Audit","✅ Content Audit","✅ 5 Months SEO Plans & Targets", "✅ On-page & Off-page SEO", "✅ Up to 4000 words P/M", "✅ Technical SEO", "✅ SEO Website Development", "✅ Analytics and Reporting", "✅ Dedicated SEO Account Manager"]},
    { title: "ENTERPRISE", features: ["✅ Keyword Research", "✅ No. of keywords/Phares: 25", "✅ Competitor Analysis","✅ Website Audit","✅ Backlink Audit","✅ Content Audit","✅ 6 Months SEO Plans & Targets", "✅ On-page & Off-page SEO", "✅ Up to 5000 words P/M", "✅ Technical SEO", "✅ SEO Website Development", "✅ Analytics and Reporting", "✅ Dedicated SEO Account Manager"]},
  ],

  
  // Add remaining packages similarly...
};

const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState("Adult App Development");

  return (
    <>
      <Navbar />

      {/* Pricing Banner */}
      <div className="pricing-banner">
        <img src={pricingBg} alt="Pricing" className="pricing-image" />
        <div className="pricing-overlay">
          <h1>Pricing</h1>
          <p>Home ▸ Pricing</p>
        </div>
      </div>

      {/* Package Selection Buttons */}
      <div className="package-buttons">
        {Object.keys(packagesData).map((pkg) => (
          <button
            key={pkg}
            className={selectedPackage === pkg ? "active" : ""}
            onClick={() => setSelectedPackage(pkg)}
          >
            {pkg}
          </button>
        ))}
      </div>

      {/* Package Display Section */}
      <section className="seo-pricing">
        <h2 className="seo-title">{selectedPackage}</h2>
        <div className="seo-packages">
          {packagesData[selectedPackage].map((pkg, index) => (
            <div className="package-card" key={index}>
              <h3>{pkg.title}</h3>
              <ul>
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className="price">{pkg.price}</p>
              <button className="seo-btn">Get Started</button>
            </div>
          ))}
        </div>
      </section>


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
                </>
  );
};

export default Pricing;
