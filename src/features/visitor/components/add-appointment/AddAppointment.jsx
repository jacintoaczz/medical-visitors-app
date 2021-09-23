import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import HospitalDataService from "../../../../services/hospital.service";
import AppointmentDataService from "../../../../services/appointment.service";
import { useSelector } from "react-redux";

export const AddAppointment = () => {
  /* Hooks */
  const [hospitals, setHospitals] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const { visitor } = useSelector((state) => state.auth);

  useEffect(() => {
    HospitalDataService.getHospitals()
      .then((res) => {
        setHospitals(res.data);
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  }, []);

  /* Event handlers */
  const changeHospital = (e) => {
    const newHospitalId = Number(e.target.value);
    const newHospital = hospitals.filter(
      (hospital) => hospital.id === newHospitalId
    )[0];

    if (newHospital === undefined) {
      setDoctors(null);
      setSelectedHospital(null);
    } else {
      setDoctors(newHospital.doctorList);
      setSelectedHospital(newHospital);
    }
    console.log("New Hospital: ", newHospital);
  };

  const changeDoctor = (e) => {
    const doctorId = Number(e.target.value);

    const newDoctor = doctors.filter(
      (doctor) => doctor.doctorId === doctorId
    )[0];

    setSelectedDoctor(newDoctor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      hospital: selectedHospital,
      doctor: selectedDoctor,
      date,
      time,
      visitor,
    };

    AppointmentDataService.createAppointment(payload).then((res) => {
      console.log("Data: ", res);
    });
  };

  return (
    <div className="card">
      <h2 className="card-header text-center">- Gestion de citas -</h2>

      {/* Card body */}
      <div className="card-body p-4">
        <div className="row">
          <div className="col-12">
            <h5 className="card-title">
              Ingrese los datos necesarios para poder crear una cita:
            </h5>
          </div>
        </div>

        {/* Forms row */}
        <form className="row mt-3" onSubmit={handleSubmit}>
          {/* Hospital select */}
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="hospital" className="form-label">
                Hospital
              </label>

              <select className="form-select" onChange={changeHospital}>
                <option selected>Elija una opción...</option>
                {hospitals &&
                  hospitals.map((hospital) => (
                    <option value={hospital.id} key={hospital.id}>
                      {hospital.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          {/* #Hospital select */}

          {/* Doctor's select */}
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="Doctor" className="form-label">
                Doctor
              </label>

              <select className="form-select" onChange={changeDoctor}>
                <option selected>Elija una opción...</option>
                {doctors &&
                  doctors.map((doctor) => (
                    <option value={doctor.doctorId} key={doctor.id}>
                      {doctor.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          {/* Doctor's select */}

          {/* Date input */}
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="company" className="form-label">
                Fecha
              </label>

              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="w-100 form-control"
              />
            </div>
          </div>
          {/* Date input */}

          {/* Time input */}
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Hora
              </label>

              <DatePicker
                selected={time}
                onChange={(date) => setTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Elija una hora"
                dateFormat="h:mm aa"
                className="w-100 form-control"
              />
            </div>
          </div>
          {/* Time input */}

          {/* Submit button */}
          <div className="col-6">
            <button type="submit" className="btn btn-success w-100 mt-2">
              Solicitar
            </button>
          </div>
          {/* #Submit button */}
        </form>
        {/* #Forms row */}
      </div>
      {/* #Card body */}
    </div>
  );
};
