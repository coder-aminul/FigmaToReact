import React from "react";
import Logo from "../../assets/logo.svg";

export default function FooterLogo() {
  return (
    <div className="col-md-3 footer-about">
      <div className="footer-logo">
        <img src={Logo} alt="Logo" />
        <p className="company-about text-justify">
          Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
        </p>
      </div>
    </div>
  );
}
