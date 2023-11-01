import { createSlice } from "@reduxjs/toolkit";
import { states, department } from "../constants/constants";

const initialState = {
  list: JSON.parse(localStorage.getItem("employees")) || [],
  form: {
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    startDate: null,
    department: "",
    street: "",
    city: "",
    state: states[0].abbreviation,
    zipCode: department[0].value,
  },
};

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("employees", JSON.stringify(state.list));
    },
    updateForm: (state, action) => {
      state.form = { ...state.form, ...action.payload };
    },
    resetForm: (state) => {
      state.form = initialState.form;
    },
  },
});

export const { addEmployee, updateForm, resetForm } = employeeSlice.actions;

// Sélecteur pour récupérer tous les employés
export const selectAllEmployees = (state) => state.employees.list;

export default employeeSlice.reducer;
