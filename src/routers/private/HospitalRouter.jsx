import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Navbar } from "../../components/navbar/Navbar";
import { HospitalDashboard } from "../../features/hospital/pages/hospital-dashboard/HospitalDashboard";

export const HospitalRouter = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="container mt-4">
        <Switch>
          <Route
            exact
            path="/hospital/dashboard"
            component={HospitalDashboard}
          />

          <Redirect to="/hospital/dashboard" />
        </Switch>
      </div>
    </>
  );
};
