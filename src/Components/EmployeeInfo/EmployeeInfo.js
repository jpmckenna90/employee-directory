import React from "react";

function EmployeeInfo(props) {
  return (
    <div className="row justify-content-center">
      <div className="col-2"><img src={props.image} alt="thumbnail"></img></div>
      <div className="col-2">{props.name}</div>
      <div className="col-2">{props.email}</div>
      <div className="col-2">{props.dob.date}</div>
      <div className="col-2">{props.phone}</div>
    </div>
  );
}

export default EmployeeInfo;
