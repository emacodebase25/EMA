import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../css/Home.css";
import smoImage from "../images/escort-smo.jpg";
import seoImage from "../images/escort-seo.jpg";
import escortapp from "../images/escort-app.jpg";
import escortseo from "../images/escort-seo.jpg";
import adultseo from "../images/adult_seo.jpg";

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

  // Function to move forward
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Function to move backward
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
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

      {/* Free Audit Section */}
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

      {/* Services Section with Smooth Infinite Loop Carousel */}
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

      {/* About Us Section */}
      <section className="about bg-gray-100 py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 w-full h-64 bg-gray-300 flex items-center justify-center">
            [Image Placeholder]
          </div>
          <div className="md:w-1/2 w-full md:pl-8 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600">We are a leading marketing firm with a proven track record of success.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg shadow">
              <p className="text-gray-600 italic">"Great service, highly recommend!"</p>
              <h4 className="font-bold mt-2">- Client Name</h4>
            </div>
            <div className="p-6 border rounded-lg shadow">
              <p className="text-gray-600 italic">"They really helped our business grow!"</p>
              <h4 className="font-bold mt-2">- Client Name</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact bg-gray-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-4">Have questions? Get in touch with us today.</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded">Contact Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
