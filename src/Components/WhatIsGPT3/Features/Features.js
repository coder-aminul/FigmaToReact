import React from "react";
import { featuresData } from "../../../Data/Data";
import "./features.css";
import FeaturesItems from "./FeaturesItems";

export default function Features() {
  return (
    <div className="row my-3">
      {featuresData.map((featuresItem) => (
        <FeaturesItems data={featuresItem} key={Math.random()} />
      ))}
    </div>
  );
}
