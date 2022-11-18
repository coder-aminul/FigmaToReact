import React from "react";

export default function ServiceItem({ data }) {
  const { title, description } = data;
  return (
    <div
      className="service-item"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="row">
        <div className="col-lg-4 col-sm-12 padding">
          <h4 className="service-title">{title}</h4>
        </div>
        <div className="col-lg-7 offset-lg-1 col-sm-12">
          <p className="service-content">{description}</p>
        </div>
      </div>
    </div>
  );
}
