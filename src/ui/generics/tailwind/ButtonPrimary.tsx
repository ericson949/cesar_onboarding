import React from 'react';

const ButtonPrimary = ({children, className,disabled, onClick}: {
    className ?:string,
    disabled ?: boolean
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {

    return (
        <button onClick={onClick} disabled={disabled} className={
           
            ` disabled:bg-inputBorder disabled:text-border px-3
            bg-[inputBorder] min-w-[28px] h-7 justify-center items-center flex
            text-white bg-primary font-bold
            text-xs  rounded ${className}`
        }>
            {children}
        </button>
    );
};

export default ButtonPrimary;