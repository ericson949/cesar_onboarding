import React, {useState} from "react";
import {UseFormRegister} from "react-hook-form";
import {IconCalendar} from "../Icons/IconCalendar";
import {IconEye} from "../Icons/IconEye";
import {IconEyeOff} from "../Icons/IconEyeOff";
import {IconAlert} from "../Icons/IconAlert";
import {IconButton} from "../components/buttons/IconButton";
import {classNames} from "../../../shared/helpers/utils";
import CustomSwitch from "../components/CustomSwitch";

export interface PropsInput {
    icon?: JSX.Element;
    suffixIcon?: JSX.Element;
    type?: React.HTMLInputTypeAttribute;
    name: string;
    id?: string;
    value?: string | number;
    placeholder?: string;
    defaultValue?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    registerValidate?: UseFormRegister<any>;
    customClass?: string;
    maxLength?: number | string;
    minLength?: number | string;
    disabled?: boolean;
    errorMessage?: string;
    required?: boolean;
    label?: string;
    tooltip?: string;
    children?: React.ReactNode
    accept?: string;
    withSwitch?: boolean;
    onChangeSwitch?: (enabled: boolean) => void;
    enabled?: boolean;
}

export const InputForm: React.FC<PropsInput> = ({
                                                    errorMessage,
                                                    type,
                                                    name,
                                                    id,
                                                    value,
                                                    placeholder,
                                                    onChange,
                                                    onFocus,
                                                    onBlur,
                                                    registerValidate,
                                                    customClass,
                                                    maxLength,
                                                    minLength,
                                                    disabled,
                                                    defaultValue,
                                                    icon,
                                                    label,
                                                    required,
                                                    suffixIcon,
                                                    tooltip,
                                                    children,
                                                    withSwitch,
                                                    accept,
                                                    enabled = false,
                                                    onChangeSwitch = () => null
                                                }): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false);
    type Props = Record<string, any>;
    const propsInput: Props = {
        name: name,
        id: id,
        placeholder: placeholder,
        disabled: disabled,
        onFocus: onFocus,
        onBlur: onBlur,
        max: maxLength,
        min: minLength,

    };
    if (type === "file") {
        propsInput['accept'] = accept;
    }
    if (value) {
        propsInput.value = value;
    }

    if (defaultValue) {
        propsInput.defaultValue = defaultValue;
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="w-full flex flex-wrap space-y-1 text-left">
            {" "}
            {(label && withSwitch !== true) && (
                <label
                    htmlFor={name}
                    className={
                        classNames("w-full font-medium text-md text-textColor relative mb-1 ",
                            " after:ml-0.5 after:text-orange ",
                            tooltip ? " z-50 " : "",
                            required ? " after:content-['*']" : "")
                    }
                >
                    {label}
                    {(tooltip) && <span className={"absolute z-50 right-100 ml-4 bg-[#FCE0D7] p-1 rounded-full -mt-1  "}>
                        <IconButton
                            type={"button"}
                            onClick={(e) => e.preventDefault()}
                            tooltip={tooltip} tooltipCss2={"w-[400px] whitespace-pre-wrap } "}>
                            <IconAlert className="fill-[#EF6337] w-4 h-4"/>
                        </IconButton>
                    </span>
                    }
                    {(children) && <span className={"absolute z-50 -right-100 ml-4 bg-[#FCE0D7] p-1 rounded-full -mt-1  "}>
                        <IconButton
                            type={"button"}
                            onClick={(e) => e.preventDefault()}
                            tooltip={children} tooltipCss2={"min-w-[330px]  whitespace-pre-wrap } "}>
                            <IconAlert className="fill-[#EF6337] w-4 h-4"/>
                        </IconButton>
                    </span>
                    }
                </label>
            )}
            <div className={"w-full flex justify-between"}>
                {(label && withSwitch) && (
                    <CustomSwitch labelText={label} name={"name"}
                                  enabled={enabled}
                                  onChange={onChangeSwitch}
                                  children={children??tooltip}
                    />
                )}
            </div>
            <div
                className={`relative  w-full h-fit  ${
                    label !== undefined ? "mt-0" : ""
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
                {(type === "date" || suffixIcon) && (
                    <span className="absolute inset-y-0 right-3 flex items-center h-11">
                        {suffixIcon ?? <IconCalendar/>}
                    </span>
                )}
                <input
                    {...(registerValidate
                        ? registerValidate(name ?? "", {
                            onChange: onChange,
                        })
                        : "")}

                    name={name}
                    type={showPassword ? "text" : type ?? "text"}
                    className={classNames(
                        customClass ??
                        `w-full h-11 py-3 border-inputBorder border-2 rounded-xl focus:border-accent
                    disabled:bg-[#E6EAEF] disabled:text-[#2A3950] disabled:placeholder-[#2A3950]
                    disabled:placeholder:font-bold bg-transparent
                    focus:outline-none text-textColor font-medium placeholder-textColor/50 placeholder:font-normal ${
                            icon ? "pl-10" : "pl-4"
                        } ${["password"].includes(type ?? "") ? "pr-10" : "pr-5"}
                ${type === "date" || type === "file" ? "appearance-none pr-3" : ""}
                `)}
                    placeholder={placeholder}
                    {...propsInput}
                />
                {type === "password" && (
                    <span className="absolute inset-y-0 right-9 flex items-center bottom-1">
                        <button
                            className="absolute  focus:outline-none"
                            onClick={handleShowPassword}
                            type="button"
                        >
                            {showPassword ? <IconEye /> : <IconEyeOff />}
                        </button>
                    </span>
                )}
            </div>
            <div className="w-full">
                <span className=" text-xs text-red">{errorMessage}</span>
            </div>
        </div>
    );
};
