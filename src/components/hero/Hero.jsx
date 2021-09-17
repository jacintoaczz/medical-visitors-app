import React from "react";
import { Link } from "react-router-dom";

import "./Hero.css";
import { LoginLinks } from "../login-links/LoginLinks";

export const Hero = () => {
  return (
    <section className="container hero">
      <div className="row mt-2">
        <div className="col-6">
          <div className="title">
            {/* Title */}
            <div className="row">
              <div className="col">
                <h1>Bienvenid@...</h1>
                <p>
                  Si es administrador, presione el botón para proceder a su
                  inicio de sesión.
                </p>
              </div>
            </div>
            {/* #Title */}

            {/* CTA */}
            <div className="row">
              <div className="col">
                <Link
                  to="/auth/admin-login"
                  className="btn btn-outline-primary"
                >
                  Iniciar sesión
                </Link>
              </div>
            </div>
            {/* #CTA */}
          </div>
        </div>

        <div className="col-6 login__area">
          <LoginLinks />
        </div>
      </div>
    </section>
  );
};
