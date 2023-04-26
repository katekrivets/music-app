import _ from "lodash";
import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./components/App";
import { HashRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container!);
console.log('test');

root.render(
  <HashRouter>
    test
    <App />
  </HashRouter>
);
