import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

import { EmployeeContext } from "./EmployeeContext";

export default function AddEmployee() {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const id = uuid();
  const uniqueUUID = id.slice(0, 8);

  const handleSubmit = () => {
    const newEmployee = { id: uniqueUUID, name, age };
    setEmployees([...employees, newEmployee]);
    navigate("/");
  };

  return (
    <div>
      <form className="d-flex flex-column p-4 border">
        <label>Name : </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="bg-white text-black"
        />
        <label>Age : </label>
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          className="bg-white text-black"
        />
        <Button
          variant="primary"
          onClick={() => handleSubmit()}
          className="mt-3"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
