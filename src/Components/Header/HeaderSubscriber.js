import React from "react";

export default function HeaderSubscriber() {
  return (
    <>
      <div className="header-subscriber my-2">
        <div className="input-group">
          <input
            type="text"
            placeholder="Your Email Address"
            className="form-control"
          />
          <button className="btn btn-danger">Get Started</button>
        </div>
      </div>
    </>
  );
}
