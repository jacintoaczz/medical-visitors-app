import React from "react";
import { useForm } from "../../../hooks/useForm";

export const VisitorLogin = () => {
  /* Hooks */
  const [{ email, password }, reset, handleInputChange] = useForm({
    email: "email@example.com",
    password: "******",
  });

  /* Event/functionality handlers */
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const validateInputs = () => {};

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
          <form onSubmit={handleSubmit} className="row mt-3">
            {/* Email input */}
            <div className="col-6">
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleInputChange}
                  placeholder="email@example.com"
                  type="email"
                  value={email}
                  required={true}
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
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleInputChange}
                  placeholder="*********"
                  type="password"
                  value={password}
                  required={true}
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
          </form>
          {/* #Forms row */}
        </div>
        {/* #Card body */}
      </div>
    </div>
  );
};
