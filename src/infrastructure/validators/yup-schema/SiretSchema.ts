import * as yup from "yup";
import {AnyObject, Maybe} from "yup";
export const yupSiretSchema = () => new CustomYupSiretSchema();


class CustomYupSiretSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
> extends yup.StringSchema<TType, TContext, TOut> {
    siret(message?: string) {
        return this.test({
            name: "siret",
            message,
            test(value) {
                return siretValidate(value!.toString())
            }
        });
    }
}

export const siretValidate = (value: string): boolean => {
    const digits = value.match(/\d+/g)?.join("") as string;
    if (!(/^\d+$/.test(digits))) {
        return false;
    }

    if (digits.length < 14 || digits.length > 14) {
        return false;
    }

    return true;
    /*
    let arrayChar : Array<number> =  [];
    for (let i = 0; i < value.length; i++) {
        let v = value.substring(i, 1);
        if (v) {
            arrayChar.push(parseInt(v));
        }
    }

    console.log(arrayChar);

    let luhn : number = 0; // clef de luhn à tester

    for (let j = 0; j < value.length; j++) {
        if (j % 2 == 0) {
            // si le rang est pair (0,2,4 etc.)
            if ((arrayChar[j] * 2) > 9) {
                arrayChar[j] = (arrayChar[j] * 2) - 9;
            } else {
                arrayChar[j] = arrayChar[j] * 2;
            }
        }
        luhn = luhn + arrayChar[j];
    }
    return luhn % 10 == 0;
    */
}

