import React from "react";

export default function AvatosComponent({ imgUrl }) {
  return (
    <div className="avator-circle d-inline-block">
      <img
        src={imgUrl}
        alt="avators"
        height={`34`}
        width="34"
        className="avators"
      />
    </div>
  );
}
