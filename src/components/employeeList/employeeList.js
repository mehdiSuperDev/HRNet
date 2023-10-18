import { useEffect } from "react";

function EmployeeList() {
  useEffect(() => {
    document.title = "HRnet - Current Employees";
  }, []);

  return <h1>Current Employees</h1>;
}

export default EmployeeList;
