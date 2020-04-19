import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Header from "./Components/Header/Header";
// import Search from "./Components/Search/Search";
import Body from "./Components/Body/Body";
import userSearch from "./utils/api";

function App() {
  let [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    userSearch()
      .then((res) => {
        setEmployeeList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (employeeList.length > 0) {
    return (
      <div>
        <Header />
        {/* <Search employees={employeeList}/> */}
        <Body employees={employeeList} />
      </div>
    );
  } else {
    return <h1>loading...</h1>
  }
}

export default App;
