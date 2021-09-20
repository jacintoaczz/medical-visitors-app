import React, { useEffect, useState } from "react";

import VisitorDataService from "../../../services/visitor.service";
import { VisitorCard } from "../components/visitor-card/VisitorCard";

export const AdminDashboard = () => {
  const [activeVisitors, setActiveVisitors] = useState([]);
  const [pendingVisitors, setPendingVisitors] = useState([]);

  useEffect(() => {
    VisitorDataService.findAll()
      .then((res) => {
        const active = res.data.filter((visitor) => visitor.isActive);
        const pending = res.data.filter((visitor) => !visitor.isActive);

        setActiveVisitors(active);
        setPendingVisitors(pending);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="container mt-4">
      <div className="row">
        <div className="col-6">
          <h2 className="text-center">Visitadores pendientes:</h2>
          <hr className="line" />

          {pendingVisitors &&
            pendingVisitors.map((visitor) => (
              <VisitorCard key={visitor.id} {...visitor} />
            ))}
        </div>

        <div className="col-6">
          <h2 className="text-center">Visitadores activos:</h2>
          <hr className="line" />

          {activeVisitors &&
            activeVisitors.map((visitor) => (
              <VisitorCard key={visitor.id} {...visitor} />
            ))}
        </div>
      </div>
    </main>
  );
};
