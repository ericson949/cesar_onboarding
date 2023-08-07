import React from "react";
import { ButtonProps } from "./shared/ButtonProps";

export const SecondaryButton = ({
    children,
    className,
    onClick,
}: ButtonProps) => {
    return (
        <button
            className={

            `flex justify-center items-center rounded-[0.25rem] h-8 px-4  bg-accent relative overflow-hidden ${className} ${
                className?.includes("text")
                    ? ""
                    : "text-base text-white font-semibold "
            }`}
            onClick={onClick}
        >
            {children}
            <div className="absolute duration-100 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
    );
};
