import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { useForm } from "../../../hooks/useForm";
import VisitorDataService from "../../../services/visitor.service";

export const VisitorRegister = () => {
  /* Hooks */
  const [
    { name, lastName, company, email, password, passwordConfirm },
    handleInputChange,
  ] = useForm({
    name: "John",
    lastName: "Doe",
    company: "Una empresa",
    email: "email@example.com",
    password: "******",
    passwordConfirm: "*******",
  });
  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCError, setPasswordCError] = useState(false);
  const history = useHistory();

  /* Event/functionality handlers */
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name,
      lastName,
      company,
      email,
      password,
    };

    if (validateFields()) {
      VisitorDataService.create(payload)
        .then((res) => {
          history.replace(`/auth/visitor-login`);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            toast.error("Ya existe un usuario con el email ingresado.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
            });
          }
          if (err.response.status === 500) {
            toast.error(
              "Ha ocurrido un error en el servidor, intente nuevamente.",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
              }
            );
          }
        });
    }
  };

  const validateFields = () => {
    name.trim().length > 0 ? setNameError(false) : setNameError(true);
    email.trim().length > 0 ? setEmailError(false) : setEmailError(true);
    lastName.trim().length > 0
      ? setLastNameError(false)
      : setLastNameError(true);
    company.trim().length > 0 ? setCompanyError(false) : setCompanyError(true);
    password.trim().length > 0
      ? setPasswordError(false)
      : setPasswordError(true);

    if (password !== passwordConfirm) {
      setPasswordCError(true);
    } else {
      setPasswordCError(false);
    }

    if (
      name &&
      lastName &&
      email &&
      company &&
      password &&
      password === passwordConfirm
    ) {
      return true;
    } else {
      return false;
    }
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
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="John"
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                />

                {nameError && <small className="error_msg">Requerido.</small>}
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

                {lastNameError && (
                  <small className="error_msg">Requerido.</small>
                )}
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

                {emailError && <small className="error_msg">Requerido.</small>}
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

                {companyError && (
                  <small className="error_msg">Requerido.</small>
                )}
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

                {passwordError && (
                  <small className="error_msg">Requerido.</small>
                )}
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
                  value={passwordConfirm}
                  name="passwordConfirm"
                  onChange={handleInputChange}
                />

                {passwordCError && (
                  <small className="error_msg">
                    Las contraseñas no coinciden.
                  </small>
                )}
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
