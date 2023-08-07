import React from 'react';

const ButtonTernary = ({children, className,disabled, onClick}: {
    className ?:string,
    disabled ?: boolean
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
    return (
        <button
        disabled={disabled}
            className={`flex justify-center border border-solid items-center space-x-2
             rounded-[0.25rem]  min-w-7 h-7  px-3
          bg-inputBorder relative overflow-hidden text-oplirisBlack
           disabled:bg-[#F7F8FB] disabled:text-[#E6EAEF] disabled:border-transparent
            font-bold`}
            onClick={onClick}
        >
            {children}
            <div className="absolute duration-100 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-full"></div>
        </button>
    );
};

export default ButtonTernary
