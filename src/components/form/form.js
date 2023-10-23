const states = [
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  },
  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
  {
    name: "California",
    abbreviation: "CA",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    abbreviation: "FM",
  },
  {
    name: "Florida",
    abbreviation: "FL",
  },
  {
    name: "Georgia",
    abbreviation: "GA",
  },
  {
    name: "Guam",
    abbreviation: "GU",
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
  },
  {
    name: "Idaho",
    abbreviation: "ID",
  },
  {
    name: "Illinois",
    abbreviation: "IL",
  },
  {
    name: "Indiana",
    abbreviation: "IN",
  },
  {
    name: "Iowa",
    abbreviation: "IA",
  },
  {
    name: "Kansas",
    abbreviation: "KS",
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
  },
  {
    name: "Maine",
    abbreviation: "ME",
  },
  {
    name: "Marshall Islands",
    abbreviation: "MH",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
  },
  {
    name: "Montana",
    abbreviation: "MT",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
  },
  {
    name: "New York",
    abbreviation: "NY",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
  },
  {
    name: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
  },
  {
    name: "Palau",
    abbreviation: "PW",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    name: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
  },
  {
    name: "Texas",
    abbreviation: "TX",
  },
  {
    name: "Utah",
    abbreviation: "UT",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
  },
  {
    name: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
  },
  {
    name: "Washington",
    abbreviation: "WA",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
  },
];

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
        >
          {states.map((state) => (
            <option key={state.abbreviation} value={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </select>

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
