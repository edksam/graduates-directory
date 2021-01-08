import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { GraduateContextProvider } from "./context/graduate-context";

ReactDOM.render(
  <BrowserRouter>
    <GraduateContextProvider>
      <App />
    </GraduateContextProvider>
  </BrowserRouter>,

  document.getElementById("root"),
);
