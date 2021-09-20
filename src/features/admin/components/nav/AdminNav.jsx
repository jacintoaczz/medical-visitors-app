import React from "react";
import { Link } from "react-router-dom";

import "./AdminNav.css";

export const AdminNav = () => {
  return (
    <ul className="nav justify-content-center admin__nav">
      <li className="nav-item">
        <Link to="/admin" className="nav-link active">
          Listado de usuarios
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/hospitals" className="nav-link active">
          Hospitales
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/auth/visitor-login" className="nav-link">
          Citas
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/auth/visitor-login" className="nav-link">
          Reglas
        </Link>
      </li>
    </ul>
  );
};
