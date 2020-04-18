import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from "./Components/Header/Header"
import ListArea from "./Components/ListArea/ListArea"
import EmployeeList from "./Components/EmployeeList/EmployeeList"

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <ListArea />
    <EmployeeList />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
