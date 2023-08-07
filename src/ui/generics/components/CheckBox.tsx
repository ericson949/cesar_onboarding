import React from 'react';
import {CheckIcon} from "@heroicons/react/24/solid";

type Props<T> = {
    isSelected:boolean;
    value?:T,
    setSelected:(value?:T)=>void;
    children:React.ReactNode,
    className?:string,
}
export function CheckBox<T>(props:Props<T>) {
    const {children, className, isSelected, setSelected, value} = props;
    return (
        <div className={`flex ${className ?? "items-center"} cursor-pointer`}  onClick={()=>setSelected(value)}>
            <div className={`w-4 h-4 rounded-[4px] border-solid border-[1px] ${isSelected?'bg-primary border-primary':'bg-transparent border-inputBorder'} flex justify-center items-center` }>
                <div className='w-4 h-4 flex items-center justify-center'>
                    {isSelected &&
                        <div className='bg-bg-valid w-4 h-4 bg-no-repeat bg-center'></div>
                    }
                </div>
            </div>
            {children}
        </div>
    );
}

