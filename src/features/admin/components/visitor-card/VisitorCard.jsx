import React from "react";
import { toast } from "react-toastify";

import VisitorDataService from "../../../../services/visitor.service";

export const VisitorCard = ({
  company,
  email,
  id,
  isPaid,
  isActive,
  lastName,
  name,
}) => {
  /* Service handlers */
  const setActiveStatus = () => {
    VisitorDataService.setActiveStatus(id).then((res) => {
      toast.success("Estado actualizado correctamente.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    });
  };

  return (
    <div className="card col-12 m-3">
      <h5 className="card-header">
        <strong>
          {name} {lastName}
        </strong>{" "}
        | @{company}
      </h5>

      <div className="card-body">
        {isPaid && <span className="badge bg-success mb-2">Pagado</span>}
        {!isPaid && <span className="badge bg-danger mb-2">No Pagado</span>}
        <h5 className="card-title mb-3">Email: {email}</h5>

        {/* Buttons */}
        <div className="row">
          {isActive && (
            <>
              <div className="col-6 offset-6">
                <button className="btn btn-danger w-100">Dar de baja</button>
              </div>
            </>
          )}

          {!isActive && (
            <div className="col-6 offset-6">
              <button
                className="btn btn-success w-100"
                onClick={setActiveStatus}
              >
                Dar de alta
              </button>
            </div>
          )}
        </div>
        {/* #Buttons */}
      </div>
    </div>
  );
};
