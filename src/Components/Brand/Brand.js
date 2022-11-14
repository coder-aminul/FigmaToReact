import React from "react";
import "./brand.css";
import BrandSlider from "./BrandSlider";

export default function Brand() {
  return (
    <>
      <section className="brand-section py-3">
        <div className="brand-container my-4">
          <BrandSlider />
        </div>
      </section>
    </>
  );
}
