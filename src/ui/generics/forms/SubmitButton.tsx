import React, { useRef } from "react";
import { ButtonProps } from "../components/buttons/shared/ButtonProps";

export const SubmitButton = ({
    children,
    className,
    type,
    onClick,
    ref,
}: ButtonProps) => {
    return (
        <button
            ref={ref}
            type={type ?? "button"}
            className={`group px-4 flex items-center justify-center rounded h-10
              text-base  relative overflow-hidden

              ${className ?? "bg-primary text-base text-white font-bold min-w-[150px]  lg:min-w-[168px]"}
             `}
            onClick={onClick}
        >
            {children}
            <div className="absolute duration-[.2] inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
    );
};
