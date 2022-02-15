import React from "react";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar2 = () => {
  return (
    <nav className="navbarItems text-decoration-none">
      <Link to="/">
        <h1 className="navbar-logo text-decoration-none">
          Vinyl Factory <i className="fas fa-compact-disc" />
        </h1>
      </Link>
      <ul>
        <li>Home</li>
        <li>Discos de los 60s</li>
        <li>Discos de los 70s</li>
        <li>Discos de los 80s</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
