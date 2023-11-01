import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "../form/form";
import "./createEmployee.css";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, updateForm, resetForm } from "../../store/employeeSlice";
import { Modal, Button } from "antd";

function CreateEmployee() {
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "HRnet - Create Employee";
  }, []);

  const employee = useSelector((state) => state.employees.form);

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    dispatch(updateForm({ [fieldName]: value }));
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
          onOk={() => {
            dispatch(resetForm());
            setIsVisible(false);
          }}
          onCancel={() => setIsVisible(false)}
          footer={[
            <Button
              key="ok"
              type="primary"
              onClick={() => {
                dispatch(resetForm());
                setIsVisible(false);
              }}
            >
              Ok
            </Button>,
          ]}
        />
      </div>
    </>
  );
}

export default CreateEmployee;
