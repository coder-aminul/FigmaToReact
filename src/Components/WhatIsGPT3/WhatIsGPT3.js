import React from "react";
import Features from "./Features/Features";
import GPT3Heading from "./GPT3Heading";
import Gpt3Title from "./Gpt3Title";
import "./whatisgpt3.css";

export default function WhatIsGPT3() {
  return (
    <section className="gpt3-section my-5">
      <div className="containers gpt-bg shadow-sm">
        <div className="gpt-containers position-relative">
          <Gpt3Title />
          <GPT3Heading />
          <Features />
        </div>
      </div>
    </section>
  );
}
