import React from "react";

import "./Hero.css";
import { LoginLinks } from "../login-links/LoginLinks";

export const Hero = () => {
  return (
    <section className="container hero">
      <div className="row">
        <div className="col-6">
          <div className="title">
            {/* Title */}
            <div className="row">
              <div className="col">
                <h1>Bienvenido...</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione, voluptas?
                </p>
              </div>
            </div>
            {/* #Title */}

            {/* CTA */}
            <div className="row">
              <div className="col">
                <a href="#about" className="btn btn-outline-primary">
                  Mira nuestros servicios!
                </a>
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
