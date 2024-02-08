import React from "react";

const EmployeeDetails = ({ name, id, salary }) => {
  return (
    <div>
      <h2>Employee Details</h2>
      <h3 className="employee-details">
        Employee Id: 
        <span className="details">{id}</span> Employee Name:{" "}
        <span className="details">{name}</span> Employee Salary:
        <span className="details">{salary}</span>
      </h3>
    </div>
  );
};

export default EmployeeDetails;
