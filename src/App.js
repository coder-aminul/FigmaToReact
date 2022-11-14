import React from "react";
import "./App.css";
import Brand from "./Components/Brand/Brand";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
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
    </>
  );
}
