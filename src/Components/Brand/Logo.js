import React from "react";

export default function Logo({ imgUrl }) {
  return (
    <>
      <div className="item">
        <img src={imgUrl} alt="Logo" />
      </div>
    </>
  );
}
