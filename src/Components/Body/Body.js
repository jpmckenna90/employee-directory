import React, { useState, useEffect } from "react";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";

function Body(employeeList) {
  let { employees } = employeeList;
  const [search, setSearch] = useState('');

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
    // console.log(results.props.children.props)
  });

  let [results, setRecords] = useState(records);
  // console.log(results[0].props.children.props);
  // console.log(results);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    // console.log(search);
    if (search) {
      // console.log(search)
      setRecords(
        records.filter((input) =>
          input.toString().toLowerCase().includes(search)
        )
      );
      console.log(results);
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
  // !todo don't forget to return records
}

export default Body;
