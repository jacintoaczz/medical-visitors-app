import React from "react";
import { AddHospital } from "../components/add-hospital/AddHospital";
import { HospitalItem } from "../components/hospital-item/HospitalItem";

export const Hospitals = () => {
  return (
    <main className="container mt-4">
      <h1 className="text-center">Hospitales</h1>

      <div className="row mt-3">
        <div className="col-6">
          <h2>Listado:</h2>
          <hr className="line" />
          <HospitalItem />
        </div>

        <div className="col-6">
          <h2>Agregar:</h2>
          <hr className="line" />

          <AddHospital />
        </div>
      </div>
    </main>
  );
};
