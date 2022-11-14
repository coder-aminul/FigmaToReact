import React from "react";
import { Avator, Avator1, Avator2 } from "../../assets/Images";
import AvatosComponent from "./AvatosComponent";
const avatorsList = [Avator, Avator1, Avator2];

export default function Visitos() {
  return (
    <>
      <div className="visitors d-flex justify-content-between align-items-center">
        <div className="visitor-avator">
          {avatorsList.map((avator) => (
            <AvatosComponent key={Math.random()} imgUrl={avator} />
          ))}
        </div>
        <div className="visitor-text w-100">
          <p className="text-white">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
    </>
  );
}
