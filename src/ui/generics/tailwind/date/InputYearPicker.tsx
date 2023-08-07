import React, {FocusEvent} from 'react';
import {LabelForm} from "../../forms/LabelForm";
import DatePicker from "react-datepicker";

const InputYearPicker = ({onFuture = true, label,
                             required = false,
                             name, max,min,
                             onChange,
                             value,
                             errorMessage}: {
    onFuture?: boolean,
    max?: string,
    min?: string,
    value?: string | null,
    label?: string,
    required?: boolean,
    name?: string,
    errorMessage?:string
    onChange: (str: string | null) => void
}) => {
    const startDate = value ? new Date(value) : undefined
    const maxDate =
        max ? new Date(max) :
            !onFuture ? new Date() : new Date("2100-01-01")

    const minDate =
        min ? new Date(min) : new Date("1900-01-01")
    const handleChange =(value: Date | null)=>{
        onChange(value?.getFullYear().toString()??null)
    }
    const onChangeRaw = (e: FocusEvent<HTMLInputElement>) => {
        if (e.target.value) {
            const val = e.target.value.replace(/[^-/0-9 ]/g, '')
            const isValid = isNaN(Date.parse(val))
            if (!isValid) {
                e.target.value = val.substring(0,4)
                onChange(val.substring(0,4))
                return
            }
        }
    }
    return (
        <div  className={"w-full flex flex-wrap space-y-1"}>
            {label && <LabelForm label={label} required={required} name={name}/>}
            <div className={"flex  relative items-center w-full"}>
                <div className={"flex w-full h-[48px]"}>
                    <DatePicker
                        locale={"fr"}
                        showYearPicker={true}
                        dateFormat={"yyyy"}
                        placeholderText={"YYYY"}
                        selected={startDate}
                        maxDate={maxDate}
                        minDate={minDate}
                        onChangeRaw={onChangeRaw}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <span className=" left-0 right-0 bottom-[-18px] text-xs text-red">
                {errorMessage}
            </span>
        </div>
    );
};

export default InputYearPicker;
