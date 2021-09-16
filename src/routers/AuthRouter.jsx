import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { AdminLogin } from "../features/admin/admin-login/AdminLogin";
import { VisitorRegister } from "../features/visitor/visitor-register/VisitorRegister";
import { VisitorLogin } from "../features/visitor/visitor-login/VisitorLogin";
import { HospitalLogin } from "../features/hospital/hospital-login/HospitalLogin";
import { Navbar } from "../components/navbar/Navbar";

export const AuthRouter = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Switch>
        <Route exact path="/auth/admin-login" component={AdminLogin} />
        <Route exact path="/auth/visitor-login" component={VisitorLogin} />
        <Route exact path="/auth/hospital-login" component={HospitalLogin} />
        <Route
          exact
          path="/auth/visitor-register"
          component={VisitorRegister}
        />

        <Redirect to="/auth/admin-login" />
      </Switch>
    </>
  );
};
