import React from "react";
import { NavLink } from "react-router-dom";

export const VisitorNav = () => {
  return (
    <ul className="nav justify-content-center admin__nav">
      <li className="nav-item">
        <NavLink
          to="/visitor/dashboard"
          className="nav-link"
          activeClassName="active"
          exact
        >
          Solicitar citas
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/visitor/appointments"
          className="nav-link"
          activeClassName="active"
          exact
        >
          Ver citas
        </NavLink>
      </li>
    </ul>
  );
};
