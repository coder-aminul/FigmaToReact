import React from "react";
import Ai from "../../assets/ai.png";
import "./header.css";
import HeaderSubscriber from "./HeaderSubscriber";
import HeaderTitle from "./HeaderTitle";
import Visitos from "./Visitos";

export default function Header() {
  return (
    <section className="header-section containers">
      <div className=" row my-4">
        <div className="col-sm-12 col-md-12 col-lg-7">
          <div className="header-content">
            <HeaderTitle />
            <HeaderSubscriber />
            <Visitos />
          </div>
        </div>
        <div className="col-sm-12 col-lg-5">
          <img src={Ai} alt="ai" className="header-image" />
        </div>
      </div>
    </section>
  );
}
