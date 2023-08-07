import React from "react";
import { ButtonProps } from "../components/buttons/shared/ButtonProps";

export const ConfirmButton = ({
    children,
    className,
    type,
    onClick,
}: ButtonProps) => {
    return (
        <button
        type={type?? "button"}
            className={`px-4 flex items-center justify-center rounded h-12 font-bold min-w-[150px]  lg:min-w-[177px]
              bg-[#FF4E3E] text-base text-white relative overflow-hidden ${className}`}
            onClick={onClick}
        >
            {children}
            <div className="absolute duration-100 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-full"></div>
        </button>
    );
};
