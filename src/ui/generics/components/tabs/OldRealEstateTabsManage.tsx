import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Tab} from "@headlessui/react";
import {classNames} from "../../../../shared/helpers/utils";
import {ProgressBar} from "../../progress-bar/ProgressBar";
import {MAX_AUDIT_STEP} from "../../../dashboard/patrimonial-detail/InProgressPatrimonialAudit";

interface  Tab {
    title:string;
    value:React.ReactNode
    step:number
}

const MAX_OLD_ESTATE_STEP = 4
const OldRealEstateTabsManage = ({
                                     data, isSimulate, lastStep,currentStep, setCurrentStep
                                 }:{isSimulate:boolean
    currentStep: number,
    setCurrentStep:(currentStep:number)=>void
    lastStep:number
    data: Tab[]
}) => {


    const ref = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(ref.current){
            ref.current.addEventListener("wheel", function (e){
                e.preventDefault();
                if (e.deltaY > 0 && ref.current) {
                    ref.current.scrollLeft += 10;
                }
                if(ref.current){
                    ref.current.scrollLeft -= 10;
                }

            })
        }
    },[])

    return (
        <div className={classNames(isSimulate? "pt-2 grid gap-y-2.5":"w-full px-2   sm:px-0")}>
            <Tab.Group selectedIndex={currentStep} onChange={setCurrentStep}>
                <Tab.List

                    ref={ref} className={
                    classNames(
                        isSimulate? classNames("flex mb-2 justify-between px-4 md:px-0 gap-3 md:gap-0 lg:pr-8")
                            :
                            classNames(
                        "horizontal-scroll items-center justify-evenly flex overflow-x-auto",
                    "space-x-4 rounded-xl p-1 bg-[#F7F8FB] border-[#E6EAEF] border",
                    "transition-all duration-300"))}>
                    {data.map((tab) => (
                        <Tab

                            as={Fragment}
                            key={tab.title}

                        >
                            {({ selected }) => (
                                <button
                                    onClick={()=>setCurrentStep(tab.step)}
                                    className={
                                    classNames(
                                        isSimulate ?
                                            classNames("rounded-md relative cursor-pointer hidden  font-medium  text-xs h-11 " ,
                                                " flex-1 md:flex items-center text-center ",
                                            " justify-center tooltip group w-full rounded-0",

                                                lastStep>tab.step && !selected ?"bg-primary text-white border-white":
                                                    lastStep > tab.step && selected ?"text-white bg-[#EF6337] border-[#EF6337]":
                                                        selected && tab.step===currentStep?" bg-accent text-[#43B8B1] border-primary/40":
                                                            "bg-white border-inputBorder ",
                                                 lastStep > tab.step ? "border-solid border-[0.5px]":
                                                     " border-solid border-[0.5px]"

                                            ):
                                                classNames('rounded-md w-fit px-4 uppercase py-2.5 text-[12px] ',
                                                'text-sm font-medium leading-5 text-[#2A3950]',
                                        ' ring-transparent  focus:outline-none focus:ring-0 ' ,
                                        'flex text-center whitespace-nowrap items-center justify-start relative'))

                                }>
                                    {isSimulate && <span className="absolute inset-y-0 right-[-0px] z-10 flex items-center">
                                    <div
                                        className={`transform translate-x-1/2 rotate-45 w-3 h-3 border-solid border-[0.5px]
                                        ${
                                            selected && tab.step === lastStep ?"bg-accent border-r-primary/40 border-t-primary/40":
                                                selected && lastStep > tab.step ?
                                                    "bg-[#EF6337] border-r-[#EF6337] border-t-[#EF6337] border-l-0 border-b-0"
                                                    :
                                                    selected ? "bg-accent border-r-primary/40 border-t-primary/40":
                                                    lastStep>tab.step? "bg-primary text-white border-white border-l-primary border-b-primary border-l-0":
                                                    tab.step>=lastStep ? " bg-white border-white " +
                                                        "bg-white border-r-inputBorder rounded-r-[2px] border-t-inputBorder z-50":
                                                ""
                                        }
                                         rounded-r-[2px]
                                        `}
                                    ></div>
                                </span>}
                                    <span
                                    className={classNames(
                                        'flex text-center whitespace-nowrap items-center justify-center relative',
                                        selected &&  !isSimulate
                                        ?
                                        classNames(

                                            'text-[#43B8B1] ',
                                            'after:content-[""] after:absolute after:-bottom-4' +
                                            '  after:w-full after: after:h-[8px] after:bg-primary '
                                        )
                                        : !isSimulate ?'text-[#2A3950] hover:text-[#43B8B1]':"")}
                                    >{tab.title}</span>
                                </button>

                            )}


                        </Tab>

                    ))}
                </Tab.List>
                {isSimulate && <div className="w-full items-center hidden lg:flex">
                    <ProgressBar value={Math.round(lastStep / MAX_OLD_ESTATE_STEP*100)}/>{" "}
                    <span className="text-xs font-medium  text-textColor w-6 ml-2">
                    {Math.round(lastStep / MAX_OLD_ESTATE_STEP*100)}%
                </span>
                </div>}
                <Tab.Panels className="mt-2">
                    {data.map((child, idx) => (
                        <Tab.Panel
                            key={child.title}
                            className={classNames(
                                'rounded-xl bg-white py-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-transparent focus:outline-none ' +
                                ' focus:ring-0'
                            )}
                        >
                            {child.value}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>


        </div>
    );
};

export default OldRealEstateTabsManage;
