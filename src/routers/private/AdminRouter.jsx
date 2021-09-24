import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import { AdminDashboard } from "../../features/admin/dashboard/AdminDashboard";
import { Hospitals } from "../../features/admin/hospitals/Hospitals";

import { AdminNav } from "../../features/admin/components/nav/AdminNav";
import { Appointments } from "../../features/admin/pages/appointments/Appointments";

export const AdminRouter = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <AdminNav />

      <Switch>
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/admin/hospitals" component={Hospitals} />
        <Route exact path="/admin/appointments" component={Appointments} />

        <Redirect to="/admin/dashboard" />
      </Switch>
    </>
  );
};
