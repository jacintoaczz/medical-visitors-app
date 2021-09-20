import React, { useState } from "react";

import { useForm } from "../../../../hooks/useForm";
import HospitalDataService from "../../../../services/hospital.service";

export const AddHospital = () => {
  /* Hooks */
  const [doctors, setDoctors] = useState([]);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const hospitalModel = {
      name,
      address,
      email,
      password,
      doctorList: doctors,
    };

    console.log(hospitalModel);
    HospitalDataService.createHospital(hospitalModel).then((res) => {
      console.log(res);
    });
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
        </div>
        {/* #Email input */}

        {/* Password input */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
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
        </div>
        {/* #Password input */}

        <hr className="line mt-4" />
        <h3>Agregar médico:</h3>
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

        <h4 className="mt-4">Listado de médicos: </h4>
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
