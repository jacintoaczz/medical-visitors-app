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
              <h5 className="card-title">
                Dr. {appointment.doctor.name} {appointment.doctor.lastName}
              </h5>
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
