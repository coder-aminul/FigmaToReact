import React from "react";
import { BsFillChatLeftTextFill, BsFillGridFill } from "react-icons/bs";
import { Circle, Person } from "../../assets/Images";

export default function AboutIllastation() {
  return (
    <div className="col-lg-6 col-sm-12">
      <div className="illastation">
        <img src={Circle} alt="Circle" height={`220`} className="cricle-top" />
        <div className="section-bg">
          <img src={Person} alt="Person" className="about-person" />
          <button className="message-button">
            <BsFillChatLeftTextFill />
          </button>
          <button className="apps-button">
            <BsFillGridFill /> My Apps
          </button>
        </div>
      </div>
    </div>
  );
}
