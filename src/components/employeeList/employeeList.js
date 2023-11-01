import { useEffect } from "react";
import { Link } from "react-router-dom";
import { selectAllEmployees } from "../../store/employeeSlice";
import { useSelector } from "react-redux";
import TableComponent from "../tableComponent/tableComponent";

function EmployeeList() {
  const employees = useSelector(selectAllEmployees);

  useEffect(() => {
    document.title = "HRnet - Current Employees";
  }, [employees]);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <TableComponent tableData={employees} />
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeList;
