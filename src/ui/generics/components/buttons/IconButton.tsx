import React from "react";
import { ButtonProps } from "./shared/ButtonProps";
import {classNames} from "../../../../shared/helpers/utils";

export const IconButton = ({
    children,
    className,
    onClick,
    disabled,
    tooltip,
    tooltipCss,
    tooltipCss2,
    type
}: ButtonProps) => {
    return (
        <div className="w-fit relative group">
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={`rounded-[3px] flex items-center justify-center cursor-pointer ${className}
            disabled:fill-title/50
            disabled:hover:fill-title/50
             tooltip
            `}
            >
                {children}
            </button>
            <div
                id="tooltip-default"
                role="tooltip"
                className={
                classNames(
                   "absolute z-[9999]",
                    "px-4 min-h-[32px] py-4 items-center flex text-sm font-medium top-8 bg-white max-w-lg ml-[-163px] md:ml-[-48px] ",
                    "transition-opacity duration-300 rounded-lg shadow-sm ",
                    "  tooltip border-solid border ",
                    tooltipCss!, tooltipCss2!,
                    !!tooltipCss?"w-fit whitespace-nowrap  ": "  ",
                    disabled && !!!tooltipCss ?"hidden" : "opacity-0 invisible group-hover:visible group-hover:opacity-100"
                )
            }
            >
                {tooltip}
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    );
};
{
    /* <div className="transition-all
            invisble opacity-0 bg-[#555] color-[fff] text-center
            w-[120px] text-sm font-medium
            left-1/2 ml-[-60px] duration-300
            after:content-[''] after:absolute after:top-[100%] after:left-1/2
            after:mal-[-5px] after:border-[5px] after:border-solid after:border-[#555]


            hover:visible hover:opacity-100
            ">
                {tooltip}
            </div> */
}
