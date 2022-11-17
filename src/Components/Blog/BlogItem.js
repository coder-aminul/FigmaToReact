import React from "react";

export default function BlogItem({ content }) {
  console.log(content);
  const { date, title, image } = content;
  return (
    <>
      <div className="blog-item">
        <img src={image} alt="Blogimage" />
        <div className="blog-card-content">
          <span className="blog-date">{date}</span>
          <h4 className="blog-card-title">{title}</h4>
          <span className="rede-more">Read Full Article</span>
        </div>
      </div>
    </>
  );
}
