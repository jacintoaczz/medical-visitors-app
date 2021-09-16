import React from "react";
import { Link } from "react-router-dom";

export const LoginLinks = () => {
  return (
    <div className="row">
      {/* Visitor register */}
      <div className="col-12 my-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Eres vistador? Registrate!</h5>
            <hr className="divider" />
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>

            <Link to="/auth/visitor-register" className="btn btn-success">
              Ir a registro
            </Link>
          </div>
        </div>
      </div>
      {/* #Visitor register */}

      {/* Visitor login */}
      <div className="col-12 my-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Ya tienes una cuenta? Inicia sesion!</h5>
            <hr className="divider" />
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>

            <Link to="/auth/visitor-login" className="btn btn-outline-success">
              Iniciar sesion
            </Link>
          </div>
        </div>
      </div>
      {/* #Visitor login */}

      {/* Hospital login */}
      <div className="col-12 my-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Area de hospitales</h5>
            <hr className="divider" />
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>

            <Link to="/auth/hospital-login" className="btn btn-outline-success">
              Iniciar sesion
            </Link>
          </div>
        </div>
      </div>
      {/* #Hospital login */}
    </div>
  );
};
