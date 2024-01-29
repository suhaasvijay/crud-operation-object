import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

import { EmployeeContext } from "./EmployeeContext";

export default function EditEmployee() {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const param = useParams();
  const paramId = param.id;

  useEffect(() => {
    // setName(localStorage.getItem("Name"));
    // setId(localStorage.getItem("Id"));
    // setAge(localStorage.getItem("Age"));
    const emp = employees.find((obj) => obj.id == paramId);
    setName(emp.name);
    setAge(emp.age);
  }, []);

  const handleSubmit = () => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === paramId) {
        return { ...employee, name, age };
      } else {
        return employee;
      }
    });
    setEmployees(updatedEmployees);
    navigate("/");
  };

  return (
    <div>
      <form className="d-flex flex-column p-4 border">
        <label>Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white text-black"
        />
        <label>Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="bg-white text-black"
        />
        <Button
          variant="primary"
          onClick={() => handleSubmit()}
          className="mt-3"
        >
          Update
        </Button>
      </form>
    </div>
  );
}
