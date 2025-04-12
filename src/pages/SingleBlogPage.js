import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Blog.css";

const SingleBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://escortmarketing.agency/wp-json/wp/v2/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error("Failed to fetch blog:", err));
  }, [id]);

  if (!blog) return <p>Loading blog...</p>;

  return (
    <div className="single-blog-container">
      <h1 dangerouslySetInnerHTML={{ __html: blog.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: blog.content.rendered }} />
    </div>
  );
};

export default SingleBlogPage;
