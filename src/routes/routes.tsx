import {createBrowserRouter} from "react-router-dom";
import SaveEmployee from "../ui/employees/save/SaveEmployee.tsx";


export const AppsRoutes = {
    create: "/save-employee"
}
export const ROUTER = createBrowserRouter([
    {
        path: "/",
        element: <></>
    },
    {
        path: AppsRoutes.create,
        element: <SaveEmployee />
    },
]);