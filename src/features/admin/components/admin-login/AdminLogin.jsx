import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { useForm } from "../../../../hooks/useForm";
import AssociationDataService from "../../../../services/association.service";

export const AdminLogin = () => {
  /* Hooks */
  const [{ email, password }, handleInputChange] = useForm({
    email: "email@example.com",
    password: "******",
  });
  const history = useHistory();

  /* Event/functionality handlers */
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    AssociationDataService.login(payload)
      .then((res) => {
        console.log("Response: ", res);
        history.replace(`/admin/dashboard`);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          toast.error(
            "No se ha encontrado un usuario con el email introducido.",
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

        if (err.response.status === 401) {
          toast.error("No coincide el usuario ingresado con la contraseña.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
        }
      });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center mt-5">
      <div className="card">
        <h2 className="card-header text-center">
          - Inicio de sesión: Administrador -
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
          <form className="row mt-3" onSubmit={handleSubmit} autoComplete="off">
            {/* Email input */}
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
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
                />
              </div>
            </div>
            {/* Email input */}

            {/* Password input */}
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
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
                />
              </div>
            </div>
            {/* Password input */}

            {/* Submit button */}
            <div className="col-6">
              <button type="submit" className="btn btn-primary w-100 mt-2">
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
