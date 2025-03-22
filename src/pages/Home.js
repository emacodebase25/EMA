import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../css/Home.css";
import smoImage from "../images/escort-smo.jpg";
import seoImage from "../images/escort-seo.jpg";
import escortapp from "../images/escort-app.jpg";
import escortseo from "../images/escort-seo.jpg";
import adultseo from "../images/adult_seo.jpg";
import adultseoj from "../images/adult-seo-jjwjwd.webp";

const serviceData = [
  { img: smoImage, title: "Escort SEO Marketing" },
  { img: seoImage, title: "Escort Social Media Marketing" },
  { img: escortapp, title: "Escort Services for App Development" },
  { img: escortseo, title: "Escort SEO" },
  { img: adultseo, title: "Adult SEO" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = serviceData.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div>
      <section className="hero">
        <div className="overlay">
          <div className="container">
            <h4>WELCOME TO</h4>
            <h1>Escort Marketing Agency</h1>
            <p>Get your adult and escort website promoted on Google with our experienced team of over 7 years.</p>
            <button className="quote-button">Get a Quote</button>
          </div>
        </div>
      </section>

      <section className="audit-section">
        <h2 className="audit-title">Free Audit Now</h2>
        <form className="audit-form">
          <div className="input-group">
            <input type="text" placeholder="Enter Name" />
            <input type="email" placeholder="Enter Email" />
            <input type="number" placeholder="Enter Phone" />
          </div>
          <div className="input-group">
            <input type="url" placeholder="Enter Website Url" />
            <textarea placeholder="Enter Message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Services We Offer</h2>
          <div className="carousel-container">
            <button className="arrow left" onClick={prevSlide}>
              <FaArrowLeft />
            </button>
            <div className="services-carousel">
              {[...serviceData, ...serviceData].slice(currentIndex, currentIndex + 3).map((service, index) => (
                <div className="service-card" key={index}>
                  <img src={service.img} alt={service.title} />
                  <h3>{service.title}</h3>
                </div>
              ))}
            </div>
            <button className="arrow right" onClick={nextSlide}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      <section className="adult-seo-section">
        <div className="container flex-container">
          <div className="image-container">
            <img src={adultseoj} alt="Adult SEO" />
          </div>
          <div className="text-container">
            <h2>Adult SEO</h2>
            <p>
            Looking to dominate the competitive landscape of the adult entertainment industry? Look no further than EscortMarketing.agency's specialized Adult SEO services. Our team of seasoned experts understands the unique dynamics of the adult market and employs advanced strategies to skyrocket your online visibility, drive targeted traffic, and boost conversions.<br></br><br></br>

With our comprehensive Adult SEO services, we tallor strategies to suit your specific needs, whether you're an escort agency, adult performer, or adult e-commerce brand. From keyword research and on-page optimization to link building and content marketing, we cover every aspect of Adult SEO to ensure your website stands out from the crowd.<br></br><br></br>

Don't settle for mediocrity when it comes to your online presence. Partner with EscortMarketing.agency and unleash the full potential of Adult SEO to propel your business to new heights of success in the ever-evolving world of adult entertainment. Contact us today to learn more and take the first step towards domination in the digital realm.
            </p>
            <div className="button-group">
              <button className="black-button">Know More</button>
              <button className="black-button">Contact Us</button>
            </div>
          </div>
        </div>
      </section>


      <section className="marketing-solutions-section">
        <div className="container text-center">
        <h2>MARKETING SOLUTIONS FOR ESCORT BUSINESS</h2>
          <p>
            Supercharge your business growth by teaming up with a company that nails SEO with the good stuff—no shortcuts.
            We're all about reeling in the right visitors, using the perfect keywords that match what your customers are itching for.
            Short, medium, long—we cover it all, hitting the bullseye on what matters most to your audience.
          </p>
          <div className="solutions-grid">
            <div className="solution-card">
              <i className="icon-quality"></i>
              <h3>Quality And User Friendly Content</h3>
              <p>
                Creating original and top-quality content for an Escort website is utmost important to leave
                a long-lasting imprint in a sea of competitors.
              </p>
            </div>
            <div className="solution-card">
              <i className="icon-keywords"></i>
              <h3>Optimizing Escort Business Related Keywords</h3>
              <p>
                In the competitive Escort websites era, optimizing content with the right blend of LSI (Latent Semantic Indexing)
                keywords and goal keywords is significant for achieving higher rankings.
              </p>
            </div>
            <div className="solution-card">
              <i className="icon-traffic"></i>
              <h3>Drive Relevant Traffic for Your Escort Website Through Social Media</h3>
              <p>
                Quality Escort websites often provide a plethora of NSFW content catering to diverse preferences,
                ensuring a steady stream of traffic.
              </p>
            </div>
            <div className="solution-card">
              <i className="icon-backlinks"></i>
              <h3>Building Quality Backlinks For Escort Websites</h3>
              <p>
                When it comes to acquiring backlinks for Escort websites, we employ strategic approaches tailored to the niche.
              </p>
            </div>
            <div className="solution-card">
              <i className="icon-spam"></i>
              <h3>Ensuring SPAM Control</h3>
              <p>
                Quality Escort websites need a system in place to maintain a clean and credible reputation while minimizing spam.
              </p>
            </div>
            <div className="solution-card">
              <i className="icon-reporting"></i>
              <h3>Monthly Reporting And Progress</h3>
              <p>
                Our monthly reports aim to provide you with an in-depth analysis highlighting the progress made.
              </p>
            </div>
          </div>
          <button className="cta-button">REQUEST A QUOTE</button>
          <button className="cta-button secondary">KNOW MORE</button>
        </div>
      </section>

      <section className="social-media-marketing">
        <div className="container text-center">
          <h2>SOCIAL MEDIA MARKETING FOR ESCORT AGENCIES</h2>
          <p>
            When operating an escort business, embracing all ways of promotion becomes essential, including using social media platforms.
            Our <span className="highlight">escort social media marketing</span> offers a cost-effective and potent means to engage with target audiences effectively.
          </p>
          <div className="social-marketing-grid">
            <div className="marketing-card">
              <i className="icon-twitter"></i>
              <h3>Choose the right Escort agency</h3>
              <p>
                In crafting a successful social media marketing strategy for an escort business, selecting the appropriate platform is paramount.
              </p>
            </div>
            <div className="marketing-card">
              <i className="icon-content"></i>
              <h3>Create quality content for results</h3>
              <p>
                The pivotal axis of success or failure revolves around the narrative you spin to engage your audience.
              </p>
            </div>
            <div className="marketing-card">
              <i className="icon-trends"></i>
              <h3>Keep an eye on trends & take advantage</h3>
              <p>
                Remaining ahead of the competition in the adult entertainment industry depends on following trends in social media marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="escort-app-development">
        <div className="container d-flex">
          <div className="image-section">
            <img src={escortapp} alt="Escort App Development" />
          </div>
          <div className="content-section">
            <h2>Escort and Adult Mobile App Development</h2>
            <p>
              We are a leading <span className="high">adult app design company</span> dedicated to crafting top software solutions.
              Our expert development teams specialize in a multitude of technology stacks, adept at seamlessly integrating innovative designs.
              Whether it's consumer-facing or B2B applications, we cater to various digital platforms including mobile, web, and desktop.
            </p>
            <p>
              Our comprehensive <span className="high">Adult Entertainment Mobile Apps services</span> encompass technology consultation,
              development, rigorous testing, ongoing support, and maintenance.
            </p>
            <button className="cta-button">KNOW MORE</button>
            <button className="cta-button secondary">CONTACT US</button>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container text-center">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"Great service, highly recommend!"</p>
              <h4>- Client Name</h4>
            </div>
            <div className="testimonial-card">
              <p>"They really helped our business grow!"</p>
              <h4>- Client Name</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>Have questions? Get in touch with us today.</p>
          <button className="blue-button">Contact Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
