import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import HospitalDataService from "../../../../services/hospital.service";
import AppointmentDataService from "../../../../services/appointment.service";

export const Appointments = () => {
  /* Hooks */
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    HospitalDataService.getHospitals()
      .then((res) => {
        setHospitals(res.data);
      })
      .catch((err) => {
        console.log("Ha ocurrido un error: ", err);
      });
  }, []);

  const accept = (id) => {
    AppointmentDataService.acceptAppointment(id).then((res) => {
      toast.success("Cita aceptada exitosamente!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });

      HospitalDataService.getHospitals()
        .then((res) => {
          setHospitals(res.data);
        })
        .catch((err) => {
          console.log("Ha ocurrido un error: ", err);
        });
    });
  };

  const reject = (id) => {
    AppointmentDataService.rejectAppointment(id).then((res) => {
      toast.success("Cita rechazada exitosamente!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });

      HospitalDataService.getHospitals()
        .then((res) => {
          setHospitals(res.data);
        })
        .catch((err) => {
          console.log("Ha ocurrido un error: ", err);
        });
    });
  };

  // const updateAppointmentStatus = (hospitalId, doctorId, appointmentId) => {
  //   let localState = hospitals;
  //   const otherHospitals = localState.filter((item) => item.id !== hospitalId);
  //   const hospital = localState.filter((item) => item.id === hospitalId)[0];

  //   const doctor = hospital.doctorList.filter(
  //     (item) => item.doctorId === doctorId
  //   )[0];
  //   const otherDoctors = hospital.doctorList.filter(
  //     (item) => item.doctorId !== doctorId
  //   );

  //   const appointment = doctor.appointmentList.filter(
  //     (item) => item.id === appointmentId
  //   )[0];
  //   const otherAppointments = doctor.appointmentList.filter(
  //     (item) => item.id !== appointmentId
  //   );

  //   appointment.isAccepted = true;
  //   appointment.isPending = false;

  //   doctor.appointmentList = [...otherAppointments, appointment];
  //   hospital.doctorList = [...otherDoctors, doctor];

  //   const newState = [hospital, ...otherHospitals];

  //   setHospitals(newState);
  // };

  return (
    <main className="container mt-4">
      {
        hospitals &&
          hospitals.map((hospital) => (
            <>
              <div className="col-6 p-3" key={hospital.id}>
                <h2>Hospital: {hospital.name}</h2>
                <hr className="line" />
                {hospital.doctorList.length > 0 &&
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

                                  {appointment.isPending && (
                                    <>
                                      <button
                                        className="btn btn-sm btn-outline-success w-100 my-1"
                                        type="button"
                                        onClick={() => accept(appointment.id)}
                                      >
                                        Aceptar
                                      </button>

                                      <button
                                        className="btn btn-sm btn-outline-danger w-100 my-1"
                                        type="button"
                                        onClick={() => reject(appointment.id)}
                                      >
                                        Rechazar
                                      </button>
                                    </>
                                  )}
                                </div>

                                <div className="d-flex flex-column align-items-center justify-content-center">
                                  <span className="badge bg-primary rounded-pill my-2">
                                    {appointment.date} | {appointment.time}
                                  </span>

                                  {!appointment.isPending &&
                                    appointment.isAccepted && (
                                      <span className="badge bg-success rounded-pill my-2 w-100">
                                        Aceptada
                                      </span>
                                    )}

                                  {!appointment.isPending &&
                                    !appointment.isAccepted && (
                                      <span className="badge bg-danger rounded-pill my-2 w-100">
                                        Rechazada
                                      </span>
                                    )}
                                </div>
                              </li>
                            ))}
                        </ol>
                      </div>
                    </div>
                  ))}
              </div>

              {hospital.doctorList.length === 0 && (
                <div className="col-6 text-center">
                  <h3>No hay doctores asociados</h3>
                </div>
              )}
            </>
          ))

        // .doctorList.map((doctor) => (
        //   <div className="card col-6 my-3">
        //     <div className="card-body">
        //       <h4 className="card-title">
        //         Dr. {doctor.name} {doctor.lastName}
        //       </h4>
        //       <hr className="line" />
        //       <h5>Citas:</h5>
        //       <ol class="list-group list-group-numbered">
        //         {doctor.appointmentList &&
        //           doctor.appointmentList.map((appointment) => (
        //             <li
        //               className="list-group-item d-flex justify-content-between align-items-start"
        //               key={appointment.id}
        //             >
        //               <div className="ms-2 me-auto">
        //                 <div className="fw-bold">
        //                   {appointment.visitor.name}{" "}
        //                   {appointment.visitor.lastName}
        //                 </div>

        //                 <h6 className="text-center">
        //                   Empresa: {appointment.visitor.company}
        //                 </h6>
        //               </div>
        //               <span className="badge bg-primary rounded-pill">
        //                 {appointment.date} | {appointment.time}
        //               </span>
        //             </li>
        //           ))}
        //       </ol>
        //     </div>
        //   </div>
        // ))
      }
    </main>
  );
};
