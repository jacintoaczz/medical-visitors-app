import React from "react";
import ReactDOM from "react-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "./index.css";
import { AppRouter } from "./routers/AppRouter";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
