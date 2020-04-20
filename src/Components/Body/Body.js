import React, { useState, useEffect } from "react";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";
import "./style.css";
// import Moment from "react-moment";

function Body(employeeList) {
  let { employees } = employeeList;
  const [search, setSearch] = useState("");

  const [sorted, setSort] = useState("");

  let records = [];

  employees.map((employee, index) => {
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

  const ascending = (a, b) => {
    const nameA = a.props.children.props.lastName.toLowerCase();
    const nameB = b.props.children.props.lastName.toLowerCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison * 1;
  };

  const descending = (a, b) => {
    const nameA = a.props.children.props.lastName.toLowerCase();
    const nameB = b.props.children.props.lastName.toLowerCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison * -1;
  };

  if (sorted === "asc") {
    records.sort(ascending);
  } else if (sorted === "desc") {
    records.sort(descending);
  }

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSort = () => {
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
      </div>
      <div className="row justify-content-center" id="searchRow">
        <input
          type="text"
          placeholder="Search for employees..."
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="row justify-content-center" id="tableHeadRow">
        <div className="col-md-2">
          <p className="tableHead">image</p>
        </div>
        <div className="col-md-2">
          <p className="tableHead">first</p>
        </div>
        <div className="col-md-2">
          <p className="tableHead">
            last <i className="fas fa-sort" onClick={handleSort}></i>
          </p>
        </div>
        <div className="col-md-2">
          <p className="tableHead">email</p>
        </div>
        <div className="col-md-2">
          <p className="tableHead">dob</p>
        </div>
        <div className="col-md-2">
          <p className="tableHead">phone</p>
        </div>
      </div>
      {results}
    </div>
  );
}

export default Body;
