import React, { useState } from "react";
import { SelectPhone } from "../components/SelectPhone";
import { PropsInput } from "./InputForm";
import { FranceFlag } from "../Icons/FranceFlag";

const options = Array({
    countryCode: "FR",
    countryPhoneCode: "(+33)",
    countryText: "France",
    flag: <FranceFlag />,
});
const InputPhone: React.FC<PropsInput> = ({
    name,
    id,
    errorMessage,
    value,
    placeholder,
    onChange,
    onFocus,
    onBlur,
    registerValidate,
    optionsValidate,
    customClass,
    maxLength,
    minLength,
    disabled,
    defaultValue,
    icon,
    type,
    label,
    required,
    className,
}): JSX.Element => {
    type Props = Record<string, any>;
    let propsInput: Props = {
        name: name,
        id: id,
        disabled: disabled,
        onFocus: onFocus,
        onBlur: onBlur,
        max: maxLength,
        min: minLength,
    };
    if (value) {
        propsInput.value = value;
    }

    if (defaultValue) {
        propsInput.defaultValue = defaultValue;
    }
    const [selectCountry, setSelectedCountry] = useState(options[0]);

    return (
        <div className="w-full">
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
            <div
                className={`${
                    label ? "mt-1" : ""
                } w-full h-11 px-4  py-3 border-inputBorder border-2 transition-all
        rounded-xl focus:border-inputBorder focus:outline-none
        flex items-center
        text-title font-medium placeholder-textColor ${className}`}
            >
                <div className=" w-6 h-4 flex items-center justify-center">
                    {selectCountry.flag}
                </div>
                <div className="relative flex items-center">
                    <SelectPhone
                        options={options}
                        selectedOption={options[0]}
                        onChange={(e) => setSelectedCountry(e)}
                    />
                </div>

                <input
                    className="ml-2 w-full lg:ml-1 appareance-none outline-none text-sm placeholder:text-[#E6EAEF] placeholder:font-medium h-5"
                    placeholder="00 00 00 00 00"
                    {...(registerValidate
                        ? registerValidate(name, {
                              onChange: onChange,
                          })
                        : "")}
                    {...propsInput}
                />
            </div>
            <div>
                <span className=" text-xs text-red">{errorMessage}</span>
            </div>
        </div>
    );
};

export default InputPhone;
