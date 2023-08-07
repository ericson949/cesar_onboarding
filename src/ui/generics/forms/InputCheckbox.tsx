import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

type InputCheckboxProps = {
    disabled?: boolean;
    isChecked?: boolean;
    children: React.ReactNode;
    className?: string;
    registerValidate?: UseFormRegister<any>;
    optionsValidate?: RegisterOptions;
    id?: string;
    name?: string;
};

export const InputCheckbox = ({
    children,
    isChecked,
    disabled,
    className,
    id,
    name,
    optionsValidate,
    registerValidate,
}: InputCheckboxProps) => {
    return (
        <div className={`flex ${className ?? "items-center"} cursor-pointer`}>
            <div className="flex w-4 h-4 items-center">
                <input
                    {...(registerValidate
                        ? registerValidate(name ?? "", optionsValidate)
                        : "")}
                    id={id}
                    aria-describedby={id}
                    type="checkbox"
                    className=" appearance-none w-4 h-4 border border-solid border-textColor
                bg-transparent rounded cursor-pointer inline-block relative
                text-primary checked:bg-primary checked:border-transparent
                checked:after:content-['']
                checked:after:w-2.5
                checked:after:h-2
                checked:after:absolute
                checked:after:text-white
                checked:after:top-[23%]
                checked:after:left-[15%]
                checked:after:bg-no-repeat
                checked:after:bg-center
                checked:after:bg-cover
                checked:after:bg-bg-valid
                focus:outline-none "
                />
            </div>
            <label className="cursor-pointer" htmlFor={id}>
                {children}
            </label>
        </div>
    );
};

{
    /* <div className={`flex items-center ${className}`}>
<input
    id="checkbox-1"
    aria-describedby="checkbox-1"
    type="checkbox"
    className="form-checkbox cursor-pointer border-textColor border border-solid text-primary bg-transparent focus:outline-none h-4 w-4 rounded focus:ring-transparent"
/>
{children}
</div> */
}
{
    /* <div className={`flex items-center ${className}`}>
            <input
                id="checkbox"
                aria-describedby="checkbox-1"
                type="checkbox"
                className="checkbox w-4 h-4 rounded border border-textColor
                border-solid outline-none bg-transparent checked:bg-primary
                checked:after:content-['\2713'] checked:after:text-primary
                checked:after:text-center
                checked:after:absolute
                checked:after:block"
            />
            {children}
        </div> */
}
