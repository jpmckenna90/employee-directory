import React, { useState } from "react";
// import React from "react";
// import

function Search() {
  const [search, setSearch] = useState();

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
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
    </div>
  );
}

export default Search;
