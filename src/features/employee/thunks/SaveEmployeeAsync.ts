import {createAsyncThunk} from "@reduxjs/toolkit";
import {SaveEmployeeCommand} from "./SaveEmployeeCommand.ts";

export const SaveEmployeeAsync = createAsyncThunk(
    "employee/save",
    async (saveCommand: SaveEmployeeCommand,
           { rejectWithValue, extra }) => {
        return void
    // const authApiGetaway: AuthApiGetaway = (extra as any).authApiGetaway;
    // try {
    //     return await authApiGetaway.login(login);
    // } catch (error) {
    //     const err = (error as any);
    //     const result: ErrorState = {
    //         message: err.message,
    //         status: false,
    //         type: err.type
    //     }
    //     return rejectWithValue(result);
    // }
});
