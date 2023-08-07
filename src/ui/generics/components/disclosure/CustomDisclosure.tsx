import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import {classNames} from "../../../../shared/helpers/utils";

type Props = {
    title: string;
    children: React.ReactNode;
    className?: string,
    titleClassName?: string,
    suffixElement?: JSX.Element
    initialState?: boolean,
    isOpen?: boolean,
    setIsOpen?: (value: boolean) => void,
};

export const variant = (open: boolean) => {
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

export const CustomDisclosure = (props: Props) => {
    const [isOpen, setIsOpen] = useState(props.initialState ?? false);
    const isDisclosureOpen = (props.isOpen ?? isOpen);
    return (
        <div
            className={`flex flex-col w-full rounded-xl md:rounded-md ${props.className ?? ''}`}>
            <div className='relative'>
                <div
                    aria-controls={props.title}
                    aria-expanded={isDisclosureOpen}
                    className={
                    classNames("flex justify-between text-left items-center w-full p-3 md:p-4 h-14 cursor-pointer",
                        props?.titleClassName??"")
                        }
                    onClick={() => {
                        if (props.setIsOpen !== undefined && props.isOpen !== undefined) {
                            props.setIsOpen(!isDisclosureOpen)
                        }
                        setIsOpen((prev) => !prev);
                    }}
                >
                    <div className="text-sm md:text-base font-bold  text-title">{props.title}</div>
                    <div
                        className={`flex items-center justify-center ${isDisclosureOpen ? 'bg-accent' : 'bg-inputBorder'} w-6 md:w-7 hover:bg-accent h-6 md:h-7 rounded-[3px] md:rounded-md group`}>
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

                                <ChevronDownIcon
                                    className={`${
                                        isDisclosureOpen ? "rotate-180 transform" : ""
                                    } md:w-4 w-3 md:h-4 h-3 ${isDisclosureOpen ? 'text-primary stroke-primary' : 'text-title stroke-title group-hover:text-primary hover:text-primary'}`}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                <div className='absolute inset-y-0 flex items-center right-20'>
                    {props.suffixElement}
                </div>
            </div>
            {isDisclosureOpen && <div className="w-full h-px bg-inputBorder"></div>}
            <motion.div
                id={props.title}
                initial={false}
                animate={variant(isDisclosureOpen)}
                className="font-light"
            >
                <div className='p-4'>
                    {props.children}
                </div>
            </motion.div>
        </div>
    );
};
