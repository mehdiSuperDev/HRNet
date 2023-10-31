import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "../form/form";
import "./createEmployee.css";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../store/employeeSlice";
import { Modal, Button } from "antd";

function CreateEmployee() {
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

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

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setEmployee({ ...employee, [fieldName]: value });
  };

  const saveEmployee = () => {
    dispatch(addEmployee(employee));
    setIsVisible(true);
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
        <button className="employee-button" onClick={saveEmployee}>
          Save
        </button>

        <Modal
          title="Employee Created!"
          open={isVisible}
          onOk={() => setIsVisible(false)}
          onCancel={() => setIsVisible(false)}
          footer={[
            <Button key="ok" type="primary" onClick={() => setIsVisible(false)}>
              Ok
            </Button>,
          ]}
        />
      </div>
    </>
  );
}

export default CreateEmployee;
