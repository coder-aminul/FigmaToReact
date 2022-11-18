import React from "react";
import "./Blog.css";
import BlogContainer from "./BlogContainer";
import BlogTitle from "./BlogTitle";

export default function Blog() {
  return (
    <section
      className="blog-section"
      id="blog"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="containers">
        <BlogTitle />
        <BlogContainer />
      </div>
    </section>
  );
}
