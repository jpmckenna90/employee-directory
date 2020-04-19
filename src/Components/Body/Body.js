import React from "react";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";

function Body(employeeList) {
  let { employees } = employeeList;
  let records = [];
  console.log(employees);

  employees.map((employee) => {
    records.push(
      <div>
        <EmployeeInfo
          image={employee.picture.thumbnail}
          name={employee.name.first + " " + employee.name.last}
          email={employee.email}
          dob={employee.dob.date}
          phone={employee.phone}
          key={employee.login.uuid}
        />
      </div>
    );
  });

  return records;
}

export default Body;
