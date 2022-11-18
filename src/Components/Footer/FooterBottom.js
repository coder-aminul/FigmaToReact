import React from "react";
import { footercontact, footerLinks, footerNav } from "../../Data/Data";
import FooterContact from "./FooterContact";
import FooterCopywrite from "./FooterCopywrite";
import FooterLink from "./FooterLink";
import FooterLogo from "./FooterLogo";

export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="row">
        <FooterLogo />
        <FooterLink title="Links" Item={footerLinks} />
        <FooterLink title="Company" Item={footerNav} />
        <FooterContact title={`Get in touch`} Item={footercontact} />
        <FooterCopywrite />
      </div>
    </div>
  );
}
