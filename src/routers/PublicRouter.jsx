import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import App from "../App";
import { Navbar } from "../components/navbar/Navbar";

export const PublicRouter = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Switch>
        <Route path="/" component={App} />

        <Redirect to="/" />
      </Switch>
    </>
  );
};
