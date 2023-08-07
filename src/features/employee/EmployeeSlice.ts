import {LoadingState} from "../../shared/enums/LoadingState.ts";
import {Employee} from "../../domain/employee/Employee.ts";
import {createSlice} from "@reduxjs/toolkit";
import {SaveEmployeeAsync} from "./thunks/SaveEmployeeAsync.ts";

interface EmployeeState {
    loading: LoadingState;
    employees: Employee[];
}

const initialState: EmployeeState = {
    loading: LoadingState.pending,
    employees: [],
};

const employeeSlice = createSlice({
    name: "Employee",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(SaveEmployeeAsync.pending, (state, action) => {
                state.loading = LoadingState.idle;
            })
            .addCase(SaveEmployeeAsync.fulfilled, (state, { payload }) => {
                state.loading = LoadingState.success;
                // state.consultants = payload.consultants;
                // state.total = payload.total;
            })
            .addCase(SaveEmployeeAsync.rejected, (state, { payload }) => {
                state.loading = LoadingState.failed;
            });

    },
});

export const {} = employeeSlice.actions;

export default employeeSlice.reducer;