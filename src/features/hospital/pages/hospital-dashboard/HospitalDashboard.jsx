import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { visitorLogin } from "../../../../store/auth/auth.actions";

export const HospitalDashboard = () => {
  /* Hooks */
  const { hospital } = useSelector((state) => state.auth);
  const [days, setDays] = useState([
    "",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ]);

  return (
    <main>
      <div className="row">
        {/* Hospital info */}
        <div className="col-6 p-4">
          <h2>Información general:</h2>
          <hr className="line" />
          <h3>Nombre: {hospital.name}</h3>
          <h3>Correo: {hospital.email}</h3>
          <hr className="line mb-5" />
          <h4>Dirección:</h4>
          <p>{hospital.address}</p>

          <h5 className="text-muted">Día libre: {days[hospital.freeDay]}</h5>
        </div>
        {/* #Hospital info */}

        {/* Doctor's info */}
        <div className="col-6 p-4">
          <h2>Doctores activos:</h2>
          <hr className="line" />
          {hospital.doctorList &&
            hospital.doctorList.map((doctor) => (
              <div className="card col-12 my-3">
                <div className="card-body">
                  <h4 className="card-title">
                    Dr. {doctor.name} {doctor.lastName}
                  </h4>
                  <hr className="line" />
                  <h5>Citas:</h5>
                  <ol class="list-group list-group-numbered">
                    {doctor.appointmentList &&
                      doctor.appointmentList.map((appointment) => (
                        <li
                          className="list-group-item d-flex justify-content-between align-items-start"
                          key={appointment.id}
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">
                              {appointment.visitor.name}{" "}
                              {appointment.visitor.lastName}
                            </div>

                            <h6 className="text-center">
                              Empresa: {appointment.visitor.company}
                            </h6>
                          </div>
                          <span className="badge bg-primary rounded-pill">
                            {appointment.date} | {appointment.time}
                          </span>
                        </li>
                      ))}
                  </ol>
                </div>
              </div>
            ))}
        </div>
        {/* #Doctor's info */}
      </div>
    </main>
  );
};
