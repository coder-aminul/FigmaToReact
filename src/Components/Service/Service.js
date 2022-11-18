import React from "react";
import { serviceData } from "../../Data/Data";
import "./service.css";
import ServiceItem from "./ServiceItem";
import ServiceQoute from "./ServiceQoute";

export default function Service() {
  return (
    <section
      className="service-section"
      id="service"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="containers">
        <div className="service-container">
          <ServiceQoute />
          <div className="service-items">
            {serviceData.map((item) => (
              <ServiceItem data={item} key={Math.random()} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
