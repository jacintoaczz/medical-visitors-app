import React from "react";
import { useSelector } from "react-redux";

export const AppointmentList = () => {
  const { visitor } = useSelector((state) => state.auth);

  return (
    <main className="row d-flex align-items-center justify-content-center">
      {visitor.appointmentList &&
        visitor.appointmentList.map((appointment) => (
          <div className="card col-5 m-3" key={appointment.id}>
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="card-title">
                  Dr. {appointment.doctor.name} {appointment.doctor.lastName}
                </h5>

                {appointment.isPending && (
                  <span className="badge bg-secondary rounded-pill my-2">
                    Pendiente
                  </span>
                )}

                {!appointment.isPending && appointment.isAccepted && (
                  <span className="badge bg-success rounded-pill my-2">
                    Aceptada
                  </span>
                )}

                {!appointment.isPending && !appointment.isAccepted && (
                  <span className="badge bg-danger rounded-pill my-2">
                    Rechazada
                  </span>
                )}
              </div>

              <h6 className="card-subtitle mb-2 text-muted">
                Fecha: {appointment.date}. Hora: {appointment.time}
              </h6>
              <hr className="line" />
              <h6>
                <strong>Hospital:</strong> {appointment.doctor.hospital.name}
              </h6>
              <p className="card-text">
                <strong>Dirección:</strong>{" "}
                {appointment.doctor.hospital.address}
              </p>
            </div>
          </div>
        ))}
    </main>
  );
};
