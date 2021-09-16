import React from "react";

export const VisitorLogin = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center mt-5">
      <div className="card">
        <h2 className="card-header text-center">
          - Inicio de sesión: Visitadores -
        </h2>

        {/* Card body */}
        <div className="card-body p-4">
          <div className="row">
            <div className="col-12">
              <h5 className="card-title">
                Ingrese su información de inicio de sesión para proceder:
              </h5>
            </div>
          </div>

          {/* Forms row */}
          <div className="row mt-3">
            {/* Email input */}
            <div className="col-6">
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            {/* Email input */}

            {/* Password input */}
            <div className="col-6">
              <div className="mb-3">
                <label for="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="*********"
                />
              </div>
            </div>
            {/* Password input */}

            {/* Submit button */}
            <div className="col-6">
              <button type="submit" className="btn btn-success w-100 mt-2">
                Iniciar sesión
              </button>
            </div>
            {/* #Submit button */}
          </div>
          {/* #Forms row */}
        </div>
        {/* #Card body */}
      </div>
    </div>
  );
};
