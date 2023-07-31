import React from "react";
import { Link } from "react-router-dom";
export function Header({ icon }) {
  return (
    <nav id="navbar">
      <ul>
        <Link to="/">
          <img src={icon} alt="" />
        </Link>
        <Link to="/problems" style={{ textDecoration: "none" }}>
          <li>Problems</li>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <li>Login</li>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <li>SignUp</li>
        </Link>
      </ul>
    </nav>
  );
}
