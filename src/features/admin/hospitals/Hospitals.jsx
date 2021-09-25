import React, { useEffect, useState } from "react";

import { AddHospital } from "../components/add-hospital/AddHospital";
import { HospitalCard } from "../components/hospital-card/HospitalCard";
import HospitalDataService from "../../../services/hospital.service";

export const Hospitals = () => {
  /* Hooks */
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    HospitalDataService.getHospitals().then((res) => {
      const hospitals = res.data.filter((item) => !item.isDeleted);
      setHospitals(hospitals);
    });
  }, []);

  return (
    <main className="container mt-4">
      <div className="row mt-3">
        <div className="col-6 p-4">
          <h2>Listado:</h2>
          <hr className="line" />
          {hospitals &&
            hospitals.map((hospital) => (
              <HospitalCard key={hospital.id} {...hospital} />
            ))}
        </div>

        <div className="col-6 p-4">
          <h2>Agregar:</h2>
          <hr className="line" />

          <AddHospital />
        </div>
      </div>
    </main>
  );
};
