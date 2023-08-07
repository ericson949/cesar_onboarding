import React, { useState } from "react";

type InputType = "text" | "password" | "email";

type InputPropos = {
    className?: string;
    icon?: JSX.Element;
    placeholder?: string;
    type?: InputType;
};

export const Input= ({
    className,
    icon,
    placeholder,
    type,
}: InputPropos) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className={`relative flex items-center w-full`}>
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
                type={showPassword ? "text" : type ?? "text"}
                className={`w-full h-10 border-inputBorder border-2 rounded focus:border-inputBorder focus:outline-none text-title font-medium placeholder-textColor placeholder:font-normal ${
                    icon ? "pl-10" : "pl-2"
                } ${className}`}
                placeholder={placeholder}
            />
        </div>
    );
};
