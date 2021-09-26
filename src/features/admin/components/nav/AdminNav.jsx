import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./AdminNav.css";

export const AdminNav = () => {
  return (
    <ul className="nav justify-content-center admin__nav">
      <li className="nav-item">
        <NavLink
          to="/admin/dashboard"
          className="nav-link"
          activeClassName="active"
          exact
        >
          Listado de usuarios
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/admin/hospitals"
          className="nav-link"
          activeClassName="active"
        >
          Hospitales
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/admin/appointments"
          className="nav-link"
          activeClassName="active"
        >
          Citas
        </NavLink>
      </li>
      {/*       <li className="nav-item">
        <NavLink
          to="/auth/visitor-login"
          className="nav-link"
          activeClassName="active"
        >
          Reglas
        </NavLink>
      </li> */}
    </ul>
  );
};
