import React from "react";
import { ButtonProps } from "./shared/ButtonProps";
import {classNames} from "../../../../shared/helpers/utils";

export const PrimaryButton = ({
    children,
    className,
    onClick,
                                  disabled,
    type,
    textWhite ="text-white bg-primary"
}: ButtonProps) => {
    return (
        <button
            className={
            classNames(
                "disabled:bg-[#C6CCD4] disabled:text-[#727C8C] disabled:text-[14px] disabled:font-medium",
                "group px-4 flex items-center justify-center",
                    className?.includes("rounded") ? "" : "rounded-full",
                !className?.includes("h-") ? "h-11" : "",
                " text-base font-semibold  relative overflow-hidden",
                className??"",textWhite)
            }
            disabled={disabled??false}
            onClick={onClick}
            type={type ?? "button"}
        >
            {children}
            <div className="absolute duration-100 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
    );
};
