import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "./index.css";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
