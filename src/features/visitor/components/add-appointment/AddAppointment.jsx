import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
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

  const [hospitalError, setHospitalError] = useState(false);
  const [doctorError, setDoctorError] = useState(false);

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

    selectedHospital ? setHospitalError(false) : setHospitalError(true);
    selectedDoctor ? setDoctorError(false) : setDoctorError(true);

    if (!doctorError && !hospitalError) {
      AppointmentDataService.createAppointment(payload)
        .then((res) => {
          console.log("Data: ", res);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            toast.error(
              "Ya existen dos citas el día seleccionado, por favor, cambie la fecha.",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
              }
            );
          }

          if (err.response.status === 403) {
            toast.error(
              "Su empresa no puede visitar mas veces el hospital seleccionado por este mes.",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
              }
            );
          }
        });
    }
  };

  return (
    <div className="card">
      <h2 className="card-header text-center">- Gestión de citas -</h2>

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
                <option defaultValue>Elija una opción...</option>
                {hospitals &&
                  hospitals.map((hospital) => (
                    <option key={hospital.id} value={hospital.id}>
                      {hospital.name}
                    </option>
                  ))}
              </select>

              {hospitalError && <small className="error_msg">Requerido</small>}
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
                <option defaultValue>Elija una opción...</option>
                {doctors &&
                  doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.doctorId}>
                      {doctor.name}
                    </option>
                  ))}
              </select>

              {doctorError && <small className="error_msg">Requerido</small>}
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
                minTime={setHours(setMinutes(new Date(), 0), 9)}
                maxTime={setHours(setMinutes(new Date(), 0), 16)}
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
