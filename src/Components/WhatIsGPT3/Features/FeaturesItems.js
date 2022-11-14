import React from "react";

export default function FeaturesItems({ data }) {
  const { title, description } = data;
  return (
    <div className="col-md-4 col-sm-12 feature-item">
      <h4 className="features-title">{title}</h4>
      <p className="features-content">{description}</p>
    </div>
  );
}
