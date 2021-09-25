import React, { useState } from "react";
import { toast } from "react-toastify";

import { useForm } from "../../../../hooks/useForm";
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

export const AddHospital = () => {
  /* Hooks */
  const [days, setDays] = useState(daysOfTheWeek);
  const [selectedDay, setSelectedDay] = useState(null);
  const [doctors, setDoctors] = useState([]);

  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [freeDayError, setFreeDayError] = useState(false);

  const [
    { name, address, email, password, dName, dLastName },
    handleInputChange,
  ] = useForm({
    name: "Test",
    address: "Test address",
    email: "example@hospital.com",
    password: "*******",
    dName: "Jane",
    dLastName: "Doe",
  });

  /* Event handlers */
  const addDoctor = () => {
    const newDoctor = {
      name: dName,
      lastName: dLastName,
    };

    const doctorsArray = [...doctors, newDoctor];
    setDoctors(doctorsArray);
  };

  const handleDropdownChange = (e) => {
    setSelectedDay(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hospitalModel = {
      name,
      address,
      email,
      password,
      freeDay: selectedDay,
      doctorList: doctors,
    };

    if (validateFields()) {
      HospitalDataService.createHospital(hospitalModel)
        .then((res) => {
          toast.success("Hospital agregado exitosamente.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
        })
        .catch((err) => {
          if (err.response.status === 401) {
            toast.error("Ya existe un hospital con el email ingresado.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
            });
          }

          if (err.response.status === 403) {
            toast.error(
              "El día seleccionado corresponde con el día libre del hospital.",
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

          if (err.response.status === 500) {
            toast.error(
              "Ha ocurrido un error en el servidor, intente nuevamente.",
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

  const validateFields = () => {
    name.trim().length > 0 ? setNameError(false) : setNameError(true);
    email.trim().length > 0 ? setEmailError(false) : setEmailError(true);
    email.trim().length > 0 ? setEmailError(false) : setEmailError(true);
    password.trim().length > 0
      ? setPasswordError(false)
      : setPasswordError(true);
    address.trim().length > 0 ? setAddressError(false) : setAddressError(true);
    selectedDay ? setFreeDayError(false) : setFreeDayError(true);

    if (name && email && address && password && selectedDay) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        {/* Name input */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>

          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name@example.com"
            name="name"
            value={name}
            onChange={handleInputChange}
          />

          {nameError && <small className="error_msg">Requerido.</small>}
        </div>
        {/* #Name input */}

        {/* Address input */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Dirección
          </label>

          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="name@example.com"
            name="address"
            value={address}
            onChange={handleInputChange}
          />

          {addressError && <small className="error_msg">Requerido.</small>}
        </div>
        {/* #Address input */}

        {/* Email input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>

          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            name="email"
            value={email}
            onChange={handleInputChange}
          />

          {emailError && <small className="error_msg">Requerido.</small>}
        </div>
        {/* #Email input */}

        {/* Password input */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>

          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="name@example.com"
            name="password"
            value={password}
            onChange={handleInputChange}
          />

          {passwordError && <small className="error_msg">Requerido.</small>}
        </div>
        {/* #Password input */}

        {/* Free day select */}
        <div className="mb-2">
          <select
            className="form-select mb-3"
            aria-label=".form-select-lg example"
            onChange={handleDropdownChange}
          >
            <option defaultValue>Escoger día líbre...</option>
            {days &&
              days.map((day, idx) => (
                <option key={idx} value={day.value}>
                  {day.day}
                </option>
              ))}
          </select>

          {freeDayError && <small className="error_msg">Requerido.</small>}
        </div>
        {/* #Free day select */}

        <hr className="line mt-4" />
        <h3>Agregar doctor(a):</h3>
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

        <h4 className="mt-4">Listado de doctores(as): </h4>
        <ul className="list-group list-group-flush">
          {doctors &&
            doctors.map((item, idx) => (
              <li className="list-group-item" key={idx}>
                {item.name} {item.lastName}
              </li>
            ))}

          {!doctors.length && (
            <li className="list-group-item text-center">No hay elementos</li>
          )}
        </ul>

        <div className="row mt-5">
          <div className="col-12">
            <button className="btn btn-primary w-100" type="submit">
              Agregar hospital
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
