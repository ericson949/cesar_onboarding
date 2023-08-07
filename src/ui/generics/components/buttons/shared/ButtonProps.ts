import React from "react";

export type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset"
    disabled ?: boolean
    tooltip?:string |React.ReactNode;
    tooltipCss ?: string,
    tooltipCss2 ?: string,
    ref?:React.RefObject<HTMLButtonElement>
    textWhite?:string
};
