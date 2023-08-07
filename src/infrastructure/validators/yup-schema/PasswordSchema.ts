import * as yup from "yup";
import { AnyObject, Maybe } from "yup";
export const yupPasswordSchema = () => new CustomYupPasswordSchema();


class CustomYupPasswordSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
> extends yup.MixedSchema<TType, TContext, TOut> {
    containNumber(message?: string) {
        return this.test({
            name: "containNumber",
            message,
            test(value) {
                if(value === undefined || value === null || value==="") {
                    return false
                }
                return containNumber(value!.toString())
            }
        });
    }
    containString(message?: string) {
        return this.test({
            name: "containString",
            message,
            test(value) {
                if(value === undefined || value === null || value==="") {
                    return false
                }
                return containString(value!.toString())
            }
        });
    }

    containMoreThanEightNumber(message?: string) {
        return this.test({
            name: "containMoreThanEightNumber",
            message,
            test(value) {
                if(value === undefined || value === null || value==="") {
                    return false
                }
                return containMoreThanEightNumber(value!.toString())
            }
        });
    }

    containSpecialCharacter(message?: string) {
        return this.test({
            name: "containSpecialCharacter",
            message,
            test(value) {
                if(value === undefined || value === null || value==="") {
                    return false
                }
                return containSpecialCharacter(value!.toString())
            }
        });
    }
}


const containMoreThanEightNumber = (value: string): boolean  => {
    return value.length >= 8;
}

const containNumber = (value: string): boolean => {
    return /\d/.test(value);
}

const containString = (value: string): boolean => {
    return /[a-zA-Z]/g.test(value);
}

const containSpecialCharacter = (value: string): boolean => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
    return specialChars.test(value);
}

