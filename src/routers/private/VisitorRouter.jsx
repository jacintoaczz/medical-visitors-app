import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import { VisitorDashboard } from "../../features/visitor/pages/visitor-dashboard/VisitorDashboard";

export const VisitorRouter = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Switch>
        <Route exact path="/visitor/dashboard" component={VisitorDashboard} />

        <Redirect to="/visitor/dashboard" />
      </Switch>
    </>
  );
};
