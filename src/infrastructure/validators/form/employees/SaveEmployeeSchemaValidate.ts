import * as yup from "yup";
import {yupDateSchema} from "../../yup-schema/DateSchema.ts";
export const  SaveEmployeeSchemaValidate =   yup.object({
    first_name:yup.string().required(),
    last_name:yup.string().required(),
    user_name:yup.string().required(),
    birthday:yupDateSchema()
        .required("Veuillez renseigner la date de naissance de l'enfant")
        .isDateValid("Veuillez renseigner une date valide"),
    start_date: yup.string().required(),
    position_held: yup.string().required(),
});