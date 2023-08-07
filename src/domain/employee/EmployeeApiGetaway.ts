import {SaveEmployeeCommand} from "../../features/employee/thunks/SaveEmployeeCommand.ts";

export interface EmployeeApiGetaway {
    save:(saveCommand:SaveEmployeeCommand)=> Promise<SaveEmployeeResponse>
}