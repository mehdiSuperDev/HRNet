import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "../form/form";
import "./createEmployee.css";

function CreateEmployee() {
  useEffect(() => {
    document.title = "HRnet - Create Employee";
  }, []);

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = () => {
    // logique de sauvegarde...
    console.log("saveEmployee called");
  };

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form employee={employee} handleInputChange={handleInputChange} />
        <button onClick={saveEmployee}>Save</button>
      </div>
    </>
  );
}

export default CreateEmployee;
