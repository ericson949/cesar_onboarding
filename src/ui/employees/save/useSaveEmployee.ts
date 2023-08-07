import {useForm, UseFormReturn} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {InputSaveEmployeeForm} from "../../../infrastructure/validators/form/employees/InputSaveEmployeeForm.ts";
import {
    SaveEmployeeSchemaValidate
} from "../../../infrastructure/validators/form/employees/SaveEmployeeSchemaValidate.ts";
export interface  SaveEmployeeBehaviours {
    form:UseFormReturn<InputSaveEmployeeForm>
    onSubmit:(data:InputSaveEmployeeForm)=>void
}
const useSaveEmployee = ():SaveEmployeeBehaviours => {
    const form = useForm<InputSaveEmployeeForm>({
        resolver: yupResolver(SaveEmployeeSchemaValidate),
        reValidateMode: "onSubmit",
    });

    const onSubmit = (data:InputSaveEmployeeForm)=>{
        console.log("ert325", data)
    }


    return {form, onSubmit}
};

export default useSaveEmployee;