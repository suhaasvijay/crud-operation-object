import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import EmployeeTable from "./components/EmployeeTable";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeTable />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
