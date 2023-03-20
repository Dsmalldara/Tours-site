import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Navbar.css";
import Home from "../Pages/Home/Home";
import logo from "./logo.svg";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { getToPathname } from "@remix-run/router";

export default function Navbar() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="heading">
          <img
            alt="null"
            src={logo}
            style={{
              width: "1.5em",
              height: "1.6em",
              marginLeft: "0.5em",
              borderRadius: "50%",
            }}
          ></img>
        </div>
        <h1 style={{ fontWeight: "600" }}>Gotravels</h1>
        <ul>
          <NavbarLink to="/">Get Started</NavbarLink>

          <NavbarLink to="/Services">Services</NavbarLink>
          <NavbarLink to="/Contact">Contact Us</NavbarLink>
          <NavbarLink to="/Login">Login</NavbarLink>
        </ul>
      </div>
      <Home
        top="header"
        heading="home"
        head="GoTravels And Tours"
        nimation="animate"
        animation="animateX"
      />
    </div>
  );
}
function NavbarLink({ to, children, ...props }) {
  const paths = window.location.pathname;
  const [click, setClick] = useState("");
  const ResolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: ResolvedPath.pathname, end: true });

  return (
    <li className="ctn">
      <Link to={to} {...props}>
        {children}
      </Link>
      <li className={isActive ? "active" : ""}></li>
    </li>
  );
}
