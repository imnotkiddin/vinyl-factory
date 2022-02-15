import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { MenuItems } from "./MenuItem";
import "./NavBar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbarItems text-decoration-none">
        <Link to="/">
          <h1 className="navbar-logo text-decoration-none">
            Vinyl Factory <i className="fas fa-compact-disc" />
          </h1>
        </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <Link to="productos">
                <li key={index}>
                  <p className={item.cName}>{item.title}</p>
                </li>
              </Link>
            );
          })}
        </ul>
        <CartWidget />
      </nav>
    );
  }
}
export default Navbar;
