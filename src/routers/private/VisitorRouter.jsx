import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Navbar } from "../../components/navbar/Navbar";
import { VisitorNav } from "../../features/visitor/components/visitor-nav/VisitorNav";
import { AppointmentList } from "../../features/visitor/pages/appointment-list/AppointmentList";
import { VisitorDashboard } from "../../features/visitor/pages/visitor-dashboard/VisitorDashboard";

export const VisitorRouter = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <VisitorNav />

      <div className="container mt-4">
        <Switch>
          <Route exact path="/visitor/dashboard" component={VisitorDashboard} />
          <Route
            exact
            path="/visitor/appointments"
            component={AppointmentList}
          />

          <Redirect to="/visitor/dashboard" />
        </Switch>
      </div>
    </>
  );
};
