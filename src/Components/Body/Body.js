import React, { useState, useEffect } from "react";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";

function Body(employeeList) {
  let { employees } = employeeList;
  const [search, setSearch] = useState("");

  let records = [];

  employees.map((employee, index) => {
    records.push(
      <div>
        <EmployeeInfo
          image={employee.picture.thumbnail}
          firstName={employee.name.first}
          lastName={employee.name.last}
          email={employee.email}
          dob={employee.dob.date}
          phone={employee.phone}
          id={index}
        />
      </div>
    );
  });

  let [results, setRecords] = useState(records);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search) {
      setRecords(
        records.filter(
          (record) =>
            record.props.children.props.firstName
              .toLowerCase()
              .includes(search) ||
            record.props.children.props.lastName.toLowerCase().includes(search) || 
            record.props.children.props.email.toLowerCase().includes(search) ||
            record.props.children.props.dob.includes(search) ||
            record.props.children.props.phone.includes(search)
        )
      );
    } else {
      setRecords(records);
    }
  }, [search]);

  return (
    <div>
      <div className="row justify-content-center">
        <p>{search}</p>
      </div>
      <div className="row justify-content-center" id="searchRow">
        <input
          type="text"
          placeholder="Search for employees..."
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="row justify-content-center" id="tableHeadRow">
        <div className="col-md-2">image</div>
        <div className="col-md-2">first name</div>
        <div className="col-md-2">last name</div>
        <div className="col-md-2">email</div>
        <div className="col-md-2">dob</div>
        <div className="col-md-2">phone</div>
      </div>
      {results}
    </div>
  );
}

export default Body;
