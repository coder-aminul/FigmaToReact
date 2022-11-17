import React from "react";
import "./Blog.css";
import BlogContainer from "./BlogContainer";
import BlogTitle from "./BlogTitle";

export default function Blog() {
  return (
    <section className="blog-section">
      <div className="containers">
        <BlogTitle />
        <BlogContainer />
      </div>
    </section>
  );
}
