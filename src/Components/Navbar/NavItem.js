import React from "react";

export default function NavItem() {
  return (
    <>
      <ul className="navbar-nav justify-content-lg-start w-100 ml-2 mynav tracking-in-expand align-items-lg-center">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            What is GPT?
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Open AI
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Case Studies
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Library
          </a>
        </li>
      </ul>
    </>
  );
}
