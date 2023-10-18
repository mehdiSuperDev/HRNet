function Form(props) {
  return (
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
      <input
        id="date-of-birth"
        type="text"
        onChange={(e) => props.handleInputChange(e, "dateOfBirth")}
        value={props.employee.dateOfBirth || ""}
      />

      <label htmlFor="start-date">Start Date</label>
      <input
        id="start-date"
        type="text"
        onChange={(e) => props.handleInputChange(e, "startDate")}
        value={props.employee.startDate || ""}
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
        <select
          name="state"
          id="state"
          onChange={(e) => props.handleInputChange(e, "state")}
          value={props.employee.state || ""}
        ></select>

        <label htmlFor="zip-code">Zip Code</label>
        <input
          id="zip-code"
          type="number"
          onChange={(e) => props.handleInputChange(e, "zipCode")}
          value={props.employee.zipCode || ""}
        />
      </fieldset>

      <label htmlFor="department">Department</label>
      <select
        name="department"
        id="department"
        onChange={(e) => props.handleInputChange(e, "department")}
        value={props.employee.department || ""}
      >
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>
    </form>
  );
}

export default Form;
