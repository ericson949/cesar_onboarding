import React from "react";
import {UseFormRegister} from "react-hook-form";
import {RegisterOptions} from "react-hook-form/dist/types/validator";
import {IconButton} from "../../buttons/IconButton";
import {IconAlert} from "../../../Icons/IconAlert";
import {classNames} from "../../../../../shared/helpers/utils";


type InputType = "text" ;

type InputPropos = {
    className?: string;
    icon?: JSX.Element;
    placeholder?: string;
    type?: InputType;
};

export interface PropsInput {
    icon?: JSX.Element;
    id?: string;
    value?: string | number;
    placeholder?: string;
    defaultValue?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    registerValidate?: UseFormRegister<any>;
    optionsValidate?: RegisterOptions;
    customClass?: string;
    maxLength?: number | string;
    minLength?: number | string;
    disabled?: boolean;
    errorMessage?: string;
    required?: boolean;
    label?: string;
    tooltip?: string;
    children ?:React.ReactNode
    accept ?:string;
}

export const InputText: React.FC<PropsInput> = ({
                                                    id,
                                                    value,
                                                    placeholder,
                                                    onChange,
                                                    onFocus,
                                                    onBlur,
                                                    maxLength,
                                                    minLength,
                                                    disabled,
                                                    defaultValue,
                                                    icon,
                                                    label,
                                                    required,
                                                    tooltip,
                                                    children,
                                                    errorMessage
                                                }): JSX.Element => {
    type Props = Record<string, any>;
    let propsInput: Props = {
        name: name,
        id: id,
        placeholder: placeholder,
        disabled: disabled,
        onFocus: onFocus,
        onBlur: onBlur,
        max: maxLength,
        min: minLength,
        onChange:onChange,
        value:value
    };

    if (defaultValue) {
        propsInput.defaultValue = defaultValue;
    }

    return (
        <div className="w-full">
            {" "}
            {label && (
                <label
                    htmlFor={"custom-text"}
                    className={
                        classNames("w-full font-medium text-md text-textColor relative ",
                            " after:ml-0.5 after:text-orange ",
                            tooltip? " z-50 ":"",
                            required ? " after:content-['*']" : "")
                    }
                >
                    {label}
                    {(tooltip ) && <span className={"absolute z-50 -right-8 bg-[#FCE0D7] p-1 rounded-full -mt-1  "}>
                        <IconButton tooltip={tooltip} tooltipCss2={"w-[400px] whitespace-pre-wrap } "}>
                            <IconAlert className="fill-[#EF6337] w-4 h-4"/>
                        </IconButton>
                    </span>
                    }
                    {(children ) && <span className={"absolute z-50 -right-8 bg-[#FCE0D7] p-1 rounded-full -mt-1  "}>
                        <IconButton tooltip={children} tooltipCss2={"min-w-[200px] max-w-[400px] whitespace-pre-wrap } "}>
                            <IconAlert className="fill-[#EF6337] w-4 h-4"/>
                        </IconButton>
                    </span>
                    }
                </label>
            )}
            <div
                className={`relative  w-full h-fit  ${
                    label !== undefined ? "mt-1" : ""
                }

        `}
            >
                {icon && (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button
                            type="submit"
                            className="p-1 focus:outline-none focus:shadow-outline"
                        >
                            {icon}
                        </button>
                    </span>
                )}
                <input
                    name={"custom-text"}
                    type={"text"}
                    className={`w-full h-11 py-3 border-inputBorder border-2 rounded-xl focus:border-accent
                    focus:outline-none text-title font-medium placeholder-textColor/50 placeholder:font-normal ${
                        icon ? "pl-10" : "pl-4"
                    }  pr-5
                `}
                    placeholder={placeholder}
                    {...propsInput}
                />
            </div>
            <div className="w-full">
                <span className=" text-xs text-red">{errorMessage}</span>
            </div>
        </div>
    );
};
