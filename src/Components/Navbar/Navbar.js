/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import Logo from "../../assets/logo.svg";
import Button from "../Button";
import "./navbar.css";
import NavItem from "./NavItem";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  const stickyMenu = () => {
    if (window.scrollY >= 350) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", stickyMenu);
  return (
    <div className={sticky ? "stickyMenu" : ""}>
      <div className="containers">
        <nav
          className={
            sticky
              ? "navbar navbar-expand-lg navbar-dark mynabs"
              : "navbar navbar-expand-lg navbar-dark mynabs"
          }
        >
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span>
              {toggleMenu ? (
                <RiCloseLine
                  color="#fff"
                  size={27}
                  onClick={() => setToggleMenu(false)}
                />
              ) : (
                <RiMenu3Line
                  color="#fff"
                  size={27}
                  onClick={() => setToggleMenu(true)}
                />
              )}
            </span>
          </button>
          <div
            className={
              toggleMenu
                ? "offcanvas offcanvas-end show fade"
                : "offcanvas offcanvas-end"
            }
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-white">Menu</h5>
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="offcanvas-body">
              <NavItem />
            </div>
          </div>
          <div className="btn-group">
            <Button className="bg-none">SignIn</Button>
            <Button className="btn-orange">SignUp</Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
