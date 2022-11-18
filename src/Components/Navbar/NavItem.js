import React from "react";

export default function NavItem() {
  return (
    <>
      <ul className="navbar-nav justify-content-lg-start w-100 ml-2 mynav tracking-in-expand align-items-lg-center">
        <li className="nav-item">
          <a className="nav-link active" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#what-is-gpt">
            What is GPT?
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#service">
            Open AI
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#casestudy">
            Case Studies
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#blog">
            Library
          </a>
        </li>
      </ul>
    </>
  );
}
