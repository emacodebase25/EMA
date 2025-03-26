import React from "react";
import { Link } from "react-router-dom";
import blogImg1 from "../images/latest_news1.webp";
import blogImg2 from "../images/latest_news2.webp";
import blogImg3 from "../images/latest_news3.webp";
import "./BlogSection.css"; 

const blogs = [
  {
    id: 1,
    date: "17 MAR",
    image: blogImg1,
    title: "London Escort Marketing: Utilizing Digital Platforms",
    description:
      "In this digital era, the escort industry thrives between dynamic and diverse opportunities to stand out from the competition...",
    link: "/blog/london-escort-marketing",
  },
  {
    id: 2,
    date: "11 MAR",
    image: blogImg2,
    title: "How to Start and Optimize an Adult E-Commerce Business on Shopify",
    description:
      "Indeed, the adult industry is thriving, and e-commerce has made it so easy to set up an online store selling...",
    link: "/blog/adult-ecommerce-shopify",
  },
  {
    id: 3,
    date: "11 MAR",
    image: blogImg3,
    title: "Things To Consider Before You Start An Adult Website",
    description:
      "Starting an adult site is a complex task to perform, involving complete planning and compliance with legal standards...",
    link: "/blog/start-adult-website",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2 className="section-title">Latest News & Updates</h2>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="date-badge">{blog.date}</div>
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <Link to={blog.link} className="read-more">READ MORE →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
