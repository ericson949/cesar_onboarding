import * as yup from "yup";
import {AnyObject, Maybe} from "yup";
export const yupAmountSchema = () => new CustomYupAmountSchema();


class CustomYupAmountSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
> extends yup.MixedSchema<TType, TContext, TOut> {
    amount(message?: string) {
        return this.test({
            name: "amount",
            message,
            test(value) {
                return amountValidate(value!.toString());
            }
        });
    }
    nullableAmount(message ?: string){
        return this.test({
            name: "nullableAmount",
            message,
            test(value) {
                return value ==undefined || isNaN(value as unknown as number) || value.length<1 ? true :  amountValidate(value.toString());
            }
        });
    }
}

const amountValidate = (value: string): boolean => {
    value = value.replace(/ /g,"");
    return /^\d+([.,]\d{0,2})?$/.test(value);
}

