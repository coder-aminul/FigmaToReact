import React from "react";

export default function Button({ children, className }) {
  return (
    <>
      <button className={`btn-top ${className}`}>{children}</button>
    </>
  );
}
