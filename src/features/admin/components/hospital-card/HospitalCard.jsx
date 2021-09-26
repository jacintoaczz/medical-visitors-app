import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import HospitalDataService from "../../../../services/hospital.service";

const daysOfTheWeek = [
  { day: "Domingo", value: 1 },
  { day: "Lunes", value: 2 },
  { day: "Martes", value: 3 },
  { day: "Miercoles", value: 4 },
  { day: "Jueves", value: 5 },
  { day: "Viernes", value: 6 },
  { day: "Sabado", value: 7 },
];

export const HospitalCard = ({ name, email, id, address, freeDay }) => {
  /* Hooks */
  const [day, setDay] = useState({ day: "Lunes", value: 1 });
  useEffect(() => {
    const selectedDay = daysOfTheWeek.filter((day) => day.value === freeDay)[0];
    setDay(selectedDay);
  }, [freeDay]);

  const deleteHospital = () => {
    HospitalDataService.delete(id).then((res) => {
      toast.success("Hospital eliminado correctamente.", {
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
      <h4 className="card-header">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <strong>{name}</strong>

            <button
              className="btn btn-sm btn-outline-danger ms-3"
              type="button"
              onClick={deleteHospital}
            >
              Eliminar
            </button>
          </div>
        </div>

        <br />
        <div className="col-12">
          <small> Email: {email}</small>
        </div>
      </h4>

      <div className="card-body">
        <h5 className="card-title mb-3">Dirección:</h5>
        <p className="h5">{address}</p>
        <hr className="line" />
        <h5>Día libre: {day.day}</h5>
      </div>
    </div>
  );
};
