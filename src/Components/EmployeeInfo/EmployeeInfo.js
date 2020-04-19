import React from "react";
import "./style.css";

function EmployeeInfo(props) {
  // console.log(props);
  if (props.id % 2) {
    return (
      <div className="row justify-content-center even" id="employeeRow">
        <div className="col-2 my-auto">
          <img src={props.image} alt="thumbnail" id="employeeImage"></img>
        </div>
        <div className="col-2 my-auto">{props.firstName}</div>
        <div className="col-2 my-auto">{props.lastName}</div>
        <div className="col-2 my-auto">{props.email}</div>
        <div className="col-2 my-auto">{props.dob}</div>
        <div className="col-2 my-auto">{props.phone}</div>
      </div>
    );
  } else {
    return (
      <div className="row justify-content-center odd" id="employeeRow">
        <div className="col-2 my-auto">
          <img src={props.image} alt="thumbnail" id="employeeImage"></img>
        </div>
        <div className="col-2 my-auto">{props.firstName}</div>
        <div className="col-2 my-auto">{props.lastName}</div>
        <div className="col-2 my-auto">{props.email}</div>
        <div className="col-2 my-auto">{props.dob}</div>
        <div className="col-2 my-auto">{props.phone}</div>
      </div>
    );
  }
}

export default EmployeeInfo;
