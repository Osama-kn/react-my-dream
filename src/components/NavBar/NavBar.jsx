import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="navbar fixed-top container">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="logo"
          />
        </a>

        <span className="navbar-toggler-icon"></span>
      </div>
    </nav>
  );
}

export default NavBar;
