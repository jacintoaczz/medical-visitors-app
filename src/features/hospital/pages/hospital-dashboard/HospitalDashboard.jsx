import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useForm } from "../../../../hooks/useForm";

import HospitalDataService from "../../../../services/hospital.service";
import { hospitalLogin } from "../../../../store/auth/auth.actions";

export const HospitalDashboard = () => {
  /* Hooks */
  const [{ dName, dLastName }, handleInputChange] = useForm({
    dName: "Jane",
    dLastName: "Doe",
  });

  const { hospital } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [days, setDays] = useState([
    "",
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ]);

  const addDoctor = () => {
    const payload = {
      name: dName,
      lastName: dLastName,
    };

    HospitalDataService.addDoctor(payload, hospital.id).then((res) => {
      toast.success("Doctor agregado exitosamente..", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });

      dispatch(hospitalLogin(res.data));
    });
  };

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

          <div className="row mt-5">
            <div className="col-12">
              <h5>Agregar doctor:</h5>
            </div>

            {/* Add doctor */}
            <div className="row mt-3">
              <div className="col-6">
                {/* Doctor's name input */}
                <div className="mb-3">
                  <label htmlFor="dNdame" className="form-label">
                    Nombre
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="dName"
                    placeholder="name@example.com"
                    name="dName"
                    value={dName}
                    onChange={handleInputChange}
                  />
                </div>
                {/* #Doctor's name input */}
              </div>
              <div className="col-6">
                {/* Doctor's last name input */}
                <div className="mb-3">
                  <label htmlFor="dLastName" className="form-label">
                    Apellido
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="dLastName"
                    placeholder="name@example.com"
                    name="dLastName"
                    value={dLastName}
                    onChange={handleInputChange}
                  />
                </div>
                {/* #Doctor's last name input */}
              </div>

              <div className="col-6">
                <button
                  className="btn btn-success w-100"
                  onClick={addDoctor}
                  type="button"
                >
                  Agregar
                </button>
              </div>
            </div>
            {/* #Add doctor */}
          </div>
        </div>
        {/* #Hospital info */}

        {/* Doctor's info */}
        <div className="col-6 p-4">
          <h2>Doctores activos:</h2>
          <hr className="line" />
          {hospital.doctorList &&
            hospital.doctorList.map((doctor) => (
              <div className="card col-12 my-3" key={doctor.id}>
                <div className="card-body">
                  <h4 className="card-title">
                    Dr. {doctor.name} {doctor.lastName}
                  </h4>
                  <hr className="line" />
                  <h5>Citas:</h5>
                  <ol className="list-group list-group-numbered">
                    {doctor.appointmentList &&
                      doctor.appointmentList.map((appointment) => (
                        <>
                          {appointment.isAccepted && (
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
                          )}

                          {appointment.isPending && (
                            <small className="text=muted text-center">
                              - Cita pendiente por actualización de status -
                            </small>
                          )}
                        </>
                      ))}

                    {!doctor.appointmentList.length && (
                      <small className="text=muted text-center">
                        - No tiene citas programadas -
                      </small>
                    )}
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
