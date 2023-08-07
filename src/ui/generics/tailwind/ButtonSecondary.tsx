import React from 'react';

export const ButtonSecondary = ({children, className,disabled}: {
    className ?:string,
    disabled ?: boolean
    children: React.ReactNode;
}) => {
    return (
        <button disabled={disabled} className={
           
            ` disabled:bg-inputBorder disabled:text-border
            bg-[inputBorder] w-7 h-7 justify-center items-center flex
            bg-inputBorder text-oplirisBlack font-bold 
            text-xs  rounded ${className}`
        }>
            {children}
        </button>
    );
};


