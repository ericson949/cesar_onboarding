import React from 'react';
import {LabelForm} from "../forms/LabelForm";
import {Switch} from "@headlessui/react";

const CustomSwitch = ({
    labelText, name, enabled, onChange,children
                      }:{
    labelText:string;
    name:string;
    enabled:boolean;
    children?:React.ReactNode;
    onChange:(enable:boolean)=>void
}) => {
    return (
        <div className={"flex items-center relative space-x-2 justify-between w-full"}>
            <LabelForm
                name={"label"+name}
                label={labelText}
                children={children}
            />
            <div className="">
                <Switch
                    checked={enabled}
                    onChange={onChange}
                    className={`${enabled ? 'bg-[#43B8B1]' : 'bg-[#DFDFE6]'}
          relative inline-flex h-[24px] w-[48px]
          shrink-0 cursor-pointer rounded-full border-2
          border-transparent transition-colors duration-200
           ease-in-out focus:outline-none `}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-[#FCFCFD]
            ring-0 transition duration-200 ease-in-out`}
                    />
                </Switch>
            </div>
        </div>
    );
};

export default CustomSwitch;
