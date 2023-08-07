import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {classNames} from "../../../shared/helpers/utils";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    cancelButtonRef?: React.MutableRefObject<null>;
    children?: JSX.Element;
    className?: string;
    className2?: string;
}

const Modal: React.FC<Props> = ({
    open,
    children,
    setOpen,
    cancelButtonRef,
    className,
}): JSX.Element => {
    const openModal = open ?? false;
    return (
        <Transition.Root show={openModal} as={Fragment}>
            <Dialog
                as="div"
                className={"relative z-[100] " + String(className)}
                onClose={setOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="flex justify-center relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8
              w-full md:max-w-xl sm:p-6 min-w-[300px] md:min-w-fit"
                            >
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};


export const ModalWithBlur: React.FC<Props> = ({
                                    open,
                                    children,
                                    setOpen,
                                    cancelButtonRef,
                                    className,
                                    className2,
                                }): JSX.Element => {
    const openModal = open ?? false;
    return (
        <Transition.Root show={openModal} as={Fragment}>
            <Dialog
                as="div"
                className={"relative z-20 " + String(className)}
                onClose={setOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0  transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full h-full items-center justify-center text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className={
                                classNames(className2??"bg-white sm:my-8 w-fit shadow-xl",
                                    " flex justify-center relative transform overflow-hidden rounded-lg",
                                    " pt-5 px-8 pb-4 text-left  transition-all  "
                                    )
                                }



                            >
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Modal;
