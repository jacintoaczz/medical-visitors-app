import React from "react";

export const VisitorRegister = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center mt-5">
      <div className="card">
        <h2 className="card-header text-center">- Registro de visitadores -</h2>

        {/* Card body */}
        <div className="card-body p-4">
          <div className="row">
            <div className="col-12">
              <h5 className="card-title">
                Por favor, llene los campos con la información solicitada para
                proceder con el registro:
              </h5>
            </div>
          </div>

          {/* Forms row */}
          <div className="row mt-3">
            {/* First name input */}
            <div className="col-6">
              <div className="mb-3">
                <label for="firstName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="John"
                />
              </div>
            </div>
            {/* #First name input */}

            {/* Last name input */}
            <div className="col-6">
              <div className="mb-3">
                <label for="lastName" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Doe"
                />
              </div>
            </div>
            {/* Last name input */}

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

            {/* Company input */}
            <div className="col-6">
              <div className="mb-3">
                <label for="company" className="form-label">
                  Empresa
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  placeholder="Una empresa"
                />
              </div>
            </div>
            {/* Company input */}

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

            {/* Password input */}
            <div className="col-6">
              <div className="mb-3">
                <label for="confirmPassword" className="form-label">
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="*********"
                />
              </div>
            </div>
            {/* Password input */}

            {/* Submit button */}
            <div className="col-6">
              <button type="submit" className="btn btn-success w-100 mt-2">
                Registrarme
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
