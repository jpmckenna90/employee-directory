import React, { useState } from "react";
// import React from "react";
// import 

function Search() {
  console.log('search rendered')

  const [search, setSearch] = useState();

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="row justify-content-center">
      <input type="text" placeholder="Search for employees..." onChange={handleInputChange}></input>
      {/* this works */}
      {/* below here, should filter users by name */}
    </div>
  );
}

export default Search;
