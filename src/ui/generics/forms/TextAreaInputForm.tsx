import React from "react";
import { UseFormRegister } from "react-hook-form";
interface Props {
    errorMessage?: string;
    rows?: number;
    name: string;
    id?: string;
    placeholder?: string;
    label?: string;
    required?: boolean;
    registerValidate?: UseFormRegister<any>;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const TextareaInputForm: React.FC<Props> = ({
                                                errorMessage,
    rows,
    name,
    id,
    placeholder,
    label,
    required,
    onChange,
    registerValidate,
}): JSX.Element => {
    return (
        <div className="grid gap-1.5">
            {" "}
            {label && (
                <label
                    htmlFor={name}
                    className={`w-full font-medium text-md text-textColor ${
                        required ? "after:content-['*']" : ""
                    } after:ml-0.5 after:text-orange`}
                >
                    {label}
                </label>
            )}
            <textarea
                {...(registerValidate
                    ? registerValidate(name ?? "", {
                          onChange: onChange,
                      })
                    : "")}
                rows={rows ? rows : 4}
                name={name}
                id={id ? id : "textarea"}
                className="border-inputBorder resize-none border-2 rounded-xl
                focus:border-inputBorder focus:outline-none text-title
                font-medium placeholder-[#E6EAEF]  placeholder:font-normal w-full py-3 px-4"
                defaultValue={""}
                placeholder={placeholder}
            />
            <div className="w-full">
                <span className=" text-xs text-red">{errorMessage}</span>
            </div>
        </div>
    );
};
export default TextareaInputForm;
