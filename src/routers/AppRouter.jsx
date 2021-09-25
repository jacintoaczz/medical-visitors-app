import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { AdminRouter } from "./private/AdminRouter";
import { HospitalRouter } from "./private/HospitalRouter";
import { VisitorRouter } from "./private/VisitorRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route path="/admin" component={AdminRouter} />
          <Route path="/visitor" component={VisitorRouter} />
          <Route path="/hospital" component={HospitalRouter} />
          <Route path="/" component={PublicRouter} />

          <Redirect to="/auth/admin-login" />
        </Switch>
      </div>
    </Router>
  );
};
