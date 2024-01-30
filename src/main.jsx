import React from "react";
import ReactDOM from "react-dom/client";

import { EmployeeProvider } from "./components/EmployeeContext.jsx";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <EmployeeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </EmployeeProvider>
);
