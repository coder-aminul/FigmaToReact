import React from "react";
import "./ctasection.css";

export default function CtaSection() {
  return (
    <section
      className="cta-section"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="containers">
        <div className="row">
          <div className="cta-container">
            <div className="col-lg-12">
              <div className="cta-content">
                <div className="content-text">
                  <span>Request Early Access to Get Started</span>
                  <h4>
                    Register today & start exploring the endless possiblities.
                  </h4>
                </div>
                <div className="content-button">
                  <button className="button">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
