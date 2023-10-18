import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEmployee from "./components/createEmployee/createEmployee";
import EmployeeList from "./components/employeeList/employeeList";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
}

export default App;
