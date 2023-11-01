import { DatePicker } from "antd";
import dayjs from "dayjs";
import "./form.css";
import { Selectoc } from "selectoc";
import { states, department } from "../../constants/constants";

function Form(props) {
  const handleDateChange = (dateValue, dateString, fieldName) => {
    props.handleInputChange({ target: { value: dateString } }, fieldName);
  };

  return (
    <div className="custom-form">
      <div className="employee-form">
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) => props.handleInputChange(e, "firstName")}
            value={props.employee.firstName || ""}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) => props.handleInputChange(e, "lastName")}
            value={props.employee.lastName || ""}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            id="date-of-birth"
            format="DD-MM-YYYY"
            onChange={(dateValue, dateString) =>
              handleDateChange(dateValue, dateString, "dateOfBirth")
            }
            value={
              props.employee.dateOfBirth
                ? dayjs(props.employee.dateOfBirth)
                : null
            }
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            id="start-date"
            format="DD-MM-YYYY"
            onChange={(dateValue, dateString) =>
              handleDateChange(dateValue, dateString, "startDate")
            }
            value={
              props.employee.startDate ? dayjs(props.employee.startDate) : null
            }
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              onChange={(e) => props.handleInputChange(e, "street")}
              value={props.employee.street || ""}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={(e) => props.handleInputChange(e, "city")}
              value={props.employee.city || ""}
            />

            <label htmlFor="state">State</label>
            <Selectoc
              options={states.map((state) => ({
                value: state.abbreviation,
                label: state.name,
              }))}
              onChange={(value) =>
                props.handleInputChange({ target: { value } }, "state")
              }
              defaultValue={props.employee.state || states[0].abbreviation}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              onChange={(e) => props.handleInputChange(e, "zipCode")}
              value={props.employee.zipCode || ""}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Selectoc
            id="department"
            onChange={(value) =>
              props.handleInputChange({ target: { value } }, "department")
            }
            defaultValue={props.employee.department || "Sales"}
            options={department}
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
