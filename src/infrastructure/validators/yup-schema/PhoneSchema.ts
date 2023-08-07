import * as yup from "yup";
import {AnyObject, Maybe} from "yup";
export const yupPhoneSchema = () => new CustomYupPhoneSchema();


class CustomYupPhoneSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
> extends yup.MixedSchema<TType, TContext, TOut> {
    phone(message?: string) {
        return this.test({
            name: "phone",
            message,
            test(value) {
                if (value === undefined) {
                    return false;
                }
                return phoneValidate(value!.toString())
            }
        });
    }
}

const phoneValidate = (value: string): boolean => {
    if (!(/^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/).test(value)) {
        return false;
    }

    return true;
}
