import React from "react";
import { blogItem } from "../../Data/Data";
import BlogItem from "./BlogItem";

export default function BlogContainer() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="blog-container">
          {blogItem.map((item) => (
            <BlogItem content={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
