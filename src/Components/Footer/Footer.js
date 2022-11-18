import React from "react";
import "./footer.css";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <footer
      className="footer-section"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="containers">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
}
