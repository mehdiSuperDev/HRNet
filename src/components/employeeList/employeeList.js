import { useEffect } from "react";
import { Link } from "react-router-dom";
import { selectAllEmployees } from "../../store/employeeSlice";
import { useSelector } from "react-redux";

function EmployeeList() {
  const employees = useSelector(selectAllEmployees);

  useEffect(() => {
    document.title = "HRnet - Current Employees";
    console.log(employees);
  }, [employees]);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeList;
