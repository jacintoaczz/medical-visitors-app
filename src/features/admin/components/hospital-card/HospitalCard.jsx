import React, { useEffect, useState } from "react";

const daysOfTheWeek = [
  { day: "Lunes", value: 1 },
  { day: "Martes", value: 2 },
  { day: "Miercoles", value: 3 },
  { day: "Jueves", value: 4 },
  { day: "Viernes", value: 5 },
  { day: "Sabado", value: 6 },
  { day: "Domingo", value: 7 },
];

export const HospitalCard = ({ name, email, id, address, freeDay }) => {
  /* Hooks */
  const [day, setDay] = useState({ day: "Lunes", value: 1 });
  useEffect(() => {
    const selectedDay = daysOfTheWeek.filter((day) => day.value === freeDay)[0];
    setDay(selectedDay);
  }, [freeDay]);

  return (
    <div className="card col-12 m-3">
      <h4 className="card-header">
        <strong>{name}</strong>
        <br />
        <small> Email: {email}</small>
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
