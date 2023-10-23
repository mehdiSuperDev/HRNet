import { useEffect } from "react";
import { Link } from "react-router-dom";

function EmployeeList() {
  useEffect(() => {
    document.title = "HRnet - Current Employees";
  }, []);

  return (
    <div id="employee-div" class="container">
      <h1>Current Employees</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeList;
