import React from "react";
import "./style.css";
import Moment from "react-moment"

function EmployeeInfo(props) {
  // console.log(props);
  if (props.id % 2) {
    return (
      <div className="row justify-content-center even py-3" id="employeeRow">
        <div className="col-2 my-auto">
          <img src={props.image} alt="thumbnail" id="employeeImage"></img>
        </div>
        <div className="col-2 my-auto">{props.firstName}</div>
        <div className="col-2 my-auto">{props.lastName}</div>
        <div className="col-2 my-auto">{props.email}</div>
        <div className="col-2 my-auto"><Moment format="MM-DD-YYYY">{props.dob}</Moment></div>
        <div className="col-2 my-auto">{props.phone}</div>
      </div>
    );
  } else {
    return (
      <div className="row justify-content-center odd py-3" id="employeeRow">
        <div className="col-2 my-auto">
          <img src={props.image} alt="thumbnail" id="employeeImage"></img>
        </div>
        <div className="col-2 my-auto">{props.firstName}</div>
        <div className="col-2 my-auto">{props.lastName}</div>
        <div className="col-2 my-auto">{props.email}</div>
        <div className="col-2 my-auto"><Moment format="MM-DD-YYYY">{props.dob}</Moment></div>
        <div className="col-2 my-auto">{props.phone}</div>
      </div>
    );
  }
}

export default EmployeeInfo;
