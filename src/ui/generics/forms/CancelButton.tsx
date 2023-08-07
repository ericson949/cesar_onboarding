import React from "react";
import { ButtonProps } from "../components/buttons/shared/ButtonProps";

export const CancelButton = ({
    children,
    className,
    type,
    onClick,
}: ButtonProps) => {
    return (
        <button
            type={type ?? "button"}
            className={` flex items-center justify-center  group rounded h-10
             border border-solid border-primary bg-accent text-base text-primary relative overflow-hidden ${className??'min-w-[150px] lg:min-w-[177px] font-bold px-4'}`}
            onClick={onClick}
        >
            {children}
            <div className="absolute duration-100 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-full"></div>
        </button>
    );
};
