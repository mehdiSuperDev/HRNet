import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: JSON.parse(localStorage.getItem("employees")) || [],
};

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("employees", JSON.stringify(state.list));
    },
  },
});

export const { addEmployee, initializeEmployees } = employeeSlice.actions;

// Sélecteur pour récupérer tous les employés
export const selectAllEmployees = (state) => state.employees.list;

export default employeeSlice.reducer;
