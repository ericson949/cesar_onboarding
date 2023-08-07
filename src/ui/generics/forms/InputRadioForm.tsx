import React from "react";
import { UseFormRegister } from "react-hook-form";
import { RegisterOptions } from "react-hook-form/dist/types/validator";

interface inputOwnProps {
    id?: string;
    name: string;
    value: string|number;
    children: string;
    isChecked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    registerValidate?: UseFormRegister<any>;
    optionsValidate?: RegisterOptions;
    disable?: boolean;
    className?: string;
}

const InputRadioForm: React.FC<inputOwnProps> = ({
    id,
    name,
    value,
    children,
    isChecked,
    onChange,
    registerValidate,
    optionsValidate,
    disable,
    className,
}) => {
    return (
        <label
            htmlFor={id}
            className="flex items-center text-title text-sm font-medium  w-full h-fit cursor-pointer"
        >
            <input
                {...(registerValidate
                    ? registerValidate(name, {
                          onChange: onChange,
                      })
                    : "")}
                type="radio"
                id={id}
                checked={isChecked}
                onChange={onChange}
                name={name}
                value={value}
                disabled={disable ?? false}
                className={`appearance-none w-[15px] md:w-[19px] h-[15px] md:h-[19px]  mr-2 border cursor-pointer
        rounded-full checked:border-[6px] border-primary ${
            className ?? "bg-white"
        }`}
            />
            <span className='mt-0.5 whitespace-nowrap'>
                {children}
            </span>
        </label>
    );
};

export default InputRadioForm;
