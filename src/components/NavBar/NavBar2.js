import React from "react";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar2 = () => {
  return (
    <nav className="navbarItems text-decoration-none navbar navbar-expand-lg navContainer container-fluid">
      <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
        <h1 className="navbar-logo text-decoration-none">
          Vinyl Factory <i className="fas fa-compact-disc" />
        </h1>
      </Link>

      <ul className="navList">
        <li>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link
            to="productos/60s"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <p>Discos de los 60s</p>
          </Link>
        </li>
        <li>
          <Link
            to="productos/70s"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <p>Discos de los 70s</p>
          </Link>
        </li>
        <li>
          <Link
            to="productos/80s"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <p>Discos de los 80s</p>
          </Link>
        </li>
        <li>
          <Link
            to="cart"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <p>Cart</p>
          </Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};
