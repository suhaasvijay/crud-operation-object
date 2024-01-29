import React, { Fragment, useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { EmployeeContext } from "./EmployeeContext";

export default function EmployeeTable() {
  const { employees, setEmployees } = useContext(EmployeeContext);

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  // Storing values in localStorage to access it in edit page
  // const handleEdit = (id, name, age) => {
  //   localStorage.setItem("Name", name);
  //   localStorage.setItem("Id", id);
  //   localStorage.setItem("Age", age);
  // };

  return (
    <Fragment>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees && employees.length > 0
            ? employees?.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{employee.age}</td>
                  <td className="p-2">
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(employee.id)}
                    >
                      Delete
                    </Button>
                    <Link to={`/edit/${employee.id}`}>
                      <Button
                        variant="secondary"
                        // onClick={() =>
                        //   handleEdit(employee.id, employee.name, employee.age)
                        // }
                        className="ml-3"
                      >
                        Edit
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))
            : "No data found"}
        </tbody>
      </Table>
      <Link to="/add">
        <Button variant="primary">Add</Button>
      </Link>
    </Fragment>
  );
}
