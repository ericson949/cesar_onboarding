import React, { useState } from "react";
import { ButtonProps } from "./shared/ButtonProps";

type ToggleButtonProps = {
    children?: React.ReactNode;
    className?: string;
    onChanged(value: boolean): void;
    isToggle?: boolean;
    disabled: boolean;
};

export const ToggleButton = ({
    children,
    onChanged,
    isToggle,
    disabled,
}: ToggleButtonProps) => {
    const [isOn, setIsOn] = useState(isToggle);

    const handleToggle = () => {
        if (disabled) {
            return;
        }
        onChanged(!isToggle);
    };
    return (
        <div className="flex items-center space-x-2 lg:space-x-0">
            <div className="lg:hidden">
                            {children}
            </div>
            <button
            className={`w-7 h-4 rounded-full px-[0.5px] transition-all flex items-center space-x-2
            ${isToggle ? "bg-primary" : "bg-border"}`}
            onClick={handleToggle}
        >
            <div
                className={`bg-white w-3 h-3 transition-all rounded-full transform ${
                    isToggle ? "translate-x-3.5" : "translate-x-[2px]"
                }`}

            ></div>

        </button>
        </div>

    );
};
