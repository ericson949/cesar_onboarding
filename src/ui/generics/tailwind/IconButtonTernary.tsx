import React from 'react';

const IconButtonTernary = ({children, className,disabled, type="button", onClick}: {
    className ?:string,
    disabled ?: boolean
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
    return (
        <button
            className={`flex w-9 h-9 lg:w-auto justify-center lg:border lg:border-solid lg:border-primary items-center space-x-2
             rounded-[0.25rem]  lg:h-8 lg:px-4 lg:min-w-[92px]  bg-accent relative overflow-hidden text-primary
             text-base font-semibold`}
            onClick={onClick}
            type={type}
        >
            {children}
            <div className="absolute duration-100 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-full"></div>
        </button>
    );
};

export default IconButtonTernary;
