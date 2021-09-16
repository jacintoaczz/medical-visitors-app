import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route path="/" component={PublicRouter} />

          <Redirect to="/auth/admin-login" />
        </Switch>
      </div>
    </Router>
  );
};
