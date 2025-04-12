import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Blog.css";
import blogBannerImage from "../images/escort-banner.jpg";

const BlogPage = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`https://escortmarketing.agency/wp-json/wp/v2/posts?per_page=8&page=${currentPage}&_embed`)
      .then((res) => {
        setTotalPages(parseInt(res.headers.get("X-WP-TotalPages")));
        return res.json();
      })
      .then((data) => setAllBlogs(data))
      .catch((err) => console.error("Failed to fetch blogs:", err));
  }, [currentPage]);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <>
      {/* Banner */}
      <div className="about-banner">
        <img src={blogBannerImage} alt="Blog Banner" className="about-banner-image" />
        <div className="about-overlay">
          <h1 className="about-title">Our Blog</h1>
          <p className="about-breadcrumb">Home &gt; Blog</p>
        </div>
      </div>

      {/* Blog Section */}
      <section className="blog-section">
        <h2 className="section-title">Our Latest Blogs</h2>
        <div className="blog-container">
          {allBlogs.map((blog) => {
            const img = blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            const date = new Date(blog.date).toLocaleDateString();
            return (
              <div className="blog-card" key={blog.id}>
                <div style={{ position: "relative" }}>
                  {img && <img src={img} alt="Blog" className="blog-image" />}
                  <div className="date-badge">{date}</div>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title" dangerouslySetInnerHTML={{ __html: blog.title.rendered }} />
                  <div className="blog-description" dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }} />
                  <Link to={`/blog/${blog.id}`} className="read-more">Read More →</Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className="pagination">
          <button disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)}>
            &laquo; Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)}>
            Next &raquo;
          </button>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
