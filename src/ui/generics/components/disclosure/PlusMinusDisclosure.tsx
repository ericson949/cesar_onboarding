import React, { useState } from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import {MinusCircleIcon, PlusCircleIcon} from "@heroicons/react/24/outline";
import {classNames} from "../../../../shared/helpers/utils";

type Props = {
    title: string;
    children: React.ReactNode;
    className?:string,
    suffixElement?:JSX.Element
    initialState?: boolean,
    isOpen?:boolean,
    setIsOpen?:(value:boolean)=>void,
};

export const variant = (open:boolean)=>{
    return open
        ? {
            height: "auto",
            opacity: 1,
            display: "block",
            transition: {
                height: {
                    duration: 0.4,
                },
                opacity: {
                    duration: 0.25,
                    delay: 0.15,
                },
            },
        }
        : {
            height: 0,
            opacity: 0,
            transition: {
                height: {
                    duration: 0.4,
                },
                opacity: {
                    duration: 0.25,
                },
            },
            transitionEnd: {
                display: "none",
            },
        };
}

export const PlusMinusDisclosure = (props: Props) => {
    const [isOpen, setIsOpen] =
        useState(props.initialState??false);
    const isDisclosureOpen = (props.isOpen?? isOpen);
    return (
        <div
            className={`flex flex-col w-full rounded-xl md:rounded-md ${props.className??''}`} >
            <div className='relative'>
                <div
                    aria-controls={props.title}
                    aria-expanded={isDisclosureOpen}
                    className="flex space-x-4 justify-between text-left items-center w-full
                     cursor-pointer"
                    onClick={() => {
                        if(props.setIsOpen!==undefined && props.isOpen!== undefined) {
                            props.setIsOpen(!isDisclosureOpen)
                        }
                        setIsOpen((prev) => !prev);
                    }}
                >
                    <div className="text-[16px] font-medium text-[#43B8B1] ">{props.title}

                    </div>
                    <div className={
                        classNames("flex items-center justify-center",
                            "w-6 md:w-7 h-6 md:h-7 rounded-[3px] md:rounded-md group",
                            isDisclosureOpen?"hover:bg-[#FCE0D7]" :"hover:bg-accent")}>
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                key={isDisclosureOpen ? "minus" : "plus"}
                                initial={{
                                    rotate: isDisclosureOpen ? -90 : 90,
                                }}
                                animate={{
                                    rotate: 0,
                                    transition: {
                                        type: "tween",
                                        duration: 0.15,
                                        ease: "circOut",
                                    },
                                }}
                                exit={{
                                    rotate: isDisclosureOpen ? -90 : 90,
                                    transition: {
                                        type: "tween",
                                        duration: 0.15,
                                        ease: "circIn",
                                    },
                                }}
                            >
                                {
                                    isDisclosureOpen?
                                        <MinusCircleIcon
                                            className={`
                                            md:w-4 w-3 md:h-4 h-3
                                            text-[#FF4E3E]
                                            `}
                                        />:
                                        <PlusCircleIcon
                                            className={` md:w-4 w-3 md:h-4 h-3
                                            text-primary
                                            `}
                                        />
                                }

                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
            <motion.div
                id={props.title}
                initial={false}
                animate={ variant(isDisclosureOpen) }
                className="font-light"
            >
               <div className='pt-2 pb-4'>
                   {props.children}
               </div>
            </motion.div>
        </div>
    );
};
