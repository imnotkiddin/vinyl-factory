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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <p>
            Vinyl Factory <i className="fas fa-compact-disc" />
          </p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <p class="nav-link active" aria-current="page">
                  Home
                </p>
              </li>
              <li class="nav-item">
                <p class="nav-link">Tu Carrito</p>
              </li>
              <li class="nav-item dropdown">
                <p
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Discos por décadas
                </p>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="productos/60s">
                      <a class="dropdown-item" href="#">
                        Discos de los 60s
                      </a>
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="productos/70s">
                      <p class="dropdown-item">Discos de los 70s</p>
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="productos/80s">
                      <p class="dropdown-item">Discos de los 80s</p>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <CartWidget />
      </nav>
    );
  }
}
export default Navbar;
