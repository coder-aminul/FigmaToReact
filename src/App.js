import React from "react";
import "./App.css";
import Brand from "./Components/Brand/Brand";
import FeatureAbout from "./Components/Feature About/FeatureAbout";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Components/Service/Service";
import WhatIsGPT3 from "./Components/WhatIsGPT3/WhatIsGPT3";

export default function App() {
  return (
    <>
      <div className="gredient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatIsGPT3 />
      <Service />
      <FeatureAbout />
    </>
  );
}
