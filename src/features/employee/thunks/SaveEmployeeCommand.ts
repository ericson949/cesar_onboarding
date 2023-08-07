import {Employee} from "../../../domain/employee/Employee.ts";

export interface SaveEmployeeCommand {
    employee: Employee
    id:string
}