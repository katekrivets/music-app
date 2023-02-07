import _ from "lodash";
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./style.css";
import App from "./components/App.jsx";
import { HashRouter } from "react-router-dom";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
