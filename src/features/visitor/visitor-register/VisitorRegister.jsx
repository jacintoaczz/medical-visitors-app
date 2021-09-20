import React from "react";

import { useForm } from "../../../hooks/useForm";

export const VisitorRegister = () => {
  /* Hooks */
  const [{ firstName, lastName, company, email, password }, handleInputChange] =
    useForm({
      firstName: "John",
      lastName: "Doe",
      company: "Una empresa",
      email: "email@example.com",
      password: "******",
    });

  /* Event/functionality handlers */
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
          <form className="row mt-3" onSubmit={handleSubmit}>
            {/* First name input */}
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="John"
                  value={firstName}
                  name="firstName"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* #First name input */}

            {/* Last name input */}
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Doe"
                  value={lastName}
                  name="lastName"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* Last name input */}

            {/* Email input */}
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email@example.com"
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* Email input */}

            {/* Company input */}
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="company" className="form-label">
                  Empresa
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  placeholder="Una empresa"
                  value={company}
                  name="company"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* Company input */}

            {/* Password input */}
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="*********"
                  value={password}
                  name="password"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* Password input */}

            {/* Password input */}
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
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
          </form>
          {/* #Forms row */}
        </div>
        {/* #Card body */}
      </div>
    </div>
  );
};
