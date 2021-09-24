import React from "react";
import { useSelector } from "react-redux";
import { AddAppointment } from "../../components/add-appointment/AddAppointment";

export const VisitorDashboard = () => {
  /* Hooks */
  const { visitor } = useSelector((state) => state.auth);

  return (
    <main className="container mt-4">
      <div className="row">
        {/* If the paid hasn't been done */}
        {!visitor.isPaid && (
          <>
            <div className="col-12">
              <h2 className="text-center">
                Aun no ha sido dado de alta en la asociación, por favor realice
                el pago para poder solicitar citas.
              </h2>
            </div>

            <div className="col-12 d-flex justify-content-center align-items-center">
              <button className="btn btn-outline-success mt-4">
                Procesar pago
              </button>
            </div>
          </>
        )}
        {/* #If the paid hasn't been done */}

        {/* Waiting to be accepted */}
        {visitor.isPaid && !visitor.isActive && (
          <>
            <div className="col-12">
              <h2 className="text-center">
                Espere ser aceptado en la asociación para poder comenzar a
                tramitar citas.
              </h2>
            </div>
          </>
        )}
        {/* #Waiting to be accepted */}

        {/* Accepted visitor */}
        {visitor.isActive && <AddAppointment />}
        {/* #Accepted visitor */}
      </div>
    </main>
  );
};
