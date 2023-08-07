import * as yup from "yup";
import {AnyObject, Maybe} from "yup";

export const yupDateSchema = () => new CustomYupDateSchema();

class CustomYupDateSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
> extends yup.MixedSchema<TType, TContext, TOut> {

    isDateValid(message?:string){

        return this.test({
            name:"date",
            message,
            test(value){
                return dateValidate(value?.toString()!);
            }
        })
    }

}

export const dateValidate = (value:string, maxDate?:number):boolean =>{
    const val = value.replace(/[^0-9 ]/g, '');
    const dd = val.substring(0,2)
    const mm = val.substring(2,4)
    const yyyy = val.substring(4, 8);
    const isValid = dd.length===2 && mm.length===2 && yyyy.length===4
    if(!isValid){
        return  false
    }
    if(maxDate && maxDate < parseInt(yyyy)){
        return  false
    }
    return  parseInt(yyyy) > 1899 && parseInt(yyyy)< 2100
}
