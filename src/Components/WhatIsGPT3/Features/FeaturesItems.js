import React from "react";

export default function FeaturesItems({ data }) {
  const { title, description } = data;
  return (
    <div
      className="col-md-4 col-sm-12 feature-item"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <h4 className="features-title">{title}</h4>
      <p className="features-content">{description}</p>
    </div>
  );
}
