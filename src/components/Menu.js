import React from "react";
import ItemList from "./ItemList";

import logo from "../images/logo.jpg";

function Menu() {
  const routes = require("../assets/rutas.json");

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top shadow"
        data-bs-theme="dark"
        style={{
          backgroundColor: "rgba(123, 0, 157, .99)",
          padding: "0",
        }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-start"
            style={{ backgroundColor: "rgba(123, 0, 157, .99)" }}
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h4 className="offcanvas-title" id="offcanvasNavbarLabel">
                Terapias con Poder
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                {routes.map((route) => (
                  <ItemList key={route.key} to={route.to} name={route.name} />
                ))}
              </ul>
            </div>
          </div>
          <a className="navbar-brand" href="/" style={{ padding: "0" }}>
            <img src={logo} alt="Logo" width="140" height="140" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
