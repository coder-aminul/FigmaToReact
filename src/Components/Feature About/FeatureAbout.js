import React from "react";
import AboutContent from "./AboutContent";
import AboutIllastation from "./AboutIllastation";
import "./feature-about.css";

export default function FeatureAbout() {
  return (
    <section
      className="about-feature-section"
      id="casestudy"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="containers">
        <div className="row">
          <AboutIllastation />
          <AboutContent />
        </div>
      </div>
    </section>
  );
}
