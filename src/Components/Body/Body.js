import React, { useState, useEffect } from "react";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";
import "./style.css"

function Body(employeeList) {
  let { employees } = employeeList;
  const [search, setSearch] = useState("");
  const [sorted, setSort] = useState("asc");

  let records = [];

  employees
    .sort((a, b) => {
      let aName = a.name.last.toLowerCase();
      let bName = b.name.last.toLowerCase();
      if (sorted === "asc") {
        console.log(JSON.stringify(employees));
        return aName - bName;
      } else if (sorted === "desc") {
        return bName - aName;
      } else {
        return 0;
      }
    })
    .map((employee, index) => {
      records.push(
        <div>
          <EmployeeInfo
            image={employee.picture.large}
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

  const handleSort = () => {
    console.log(sorted);
    if (sorted === "" || sorted === "desc") {
      setSort("asc");
    } else if (sorted === "asc") {
      setSort("desc");
    }
  };

  useEffect(() => {
    if (search) {
      setRecords(
        records.filter(
          (record) =>
            record.props.children.props.firstName
              .toLowerCase()
              .includes(search) ||
            record.props.children.props.lastName
              .toLowerCase()
              .includes(search) ||
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
        <div className="col-md-2"><p class="tableHead">
          image
        </p></div>
        <div className="col-md-2"><p class="tableHead">
          first name
        </p></div>
        <div className="col-md-2"><p class="tableHead">
          last name
        </p></div>
        <div className="col-md-2"><p class="tableHead">
          email
        </p></div>
        <div className="col-md-2"><p class="tableHead">
          dob
        </p></div>
        <div className="col-md-2"><p class="tableHead">
          phone
        </p></div>
      </div>
      {results}
    </div>
  );
}

export default Body;
