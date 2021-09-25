import React from "react";
import { Link, useHistory, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../store/auth/auth.actions";

export const Navbar = () => {
  const { visitor, hospital, admin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const userLogout = () => {
    dispatch(logout());
    history.replace(`/`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Visitadores App
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
                exact
              >
                Principal
              </NavLink>
            </li>

            {hospital && (
              <li className="nav-item">
                <NavLink
                  to="/hospital/dashboard"
                  className="nav-link"
                  activeClassName="active"
                  exact
                >
                  Dashboard
                </NavLink>
              </li>
            )}

            {visitor && (
              <li className="nav-item">
                <NavLink
                  to="/visitor/dashboard"
                  className="nav-link"
                  activeClassName="active"
                  exact
                >
                  Dashboard
                </NavLink>
              </li>
            )}

            {admin && (
              <li className="nav-item">
                <NavLink
                  to="/admin/dashboard"
                  className="nav-link"
                  activeClassName="active"
                  exact
                >
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {visitor && <span>Hola, {visitor.name}.</span>}

        {(hospital || visitor || admin) && (
          <button
            className="btn btn-sm btn-outline-secondary ms-3"
            type="button"
            onClick={userLogout}
          >
            Cerrar sesión
          </button>
        )}
      </div>
    </nav>
  );
};
