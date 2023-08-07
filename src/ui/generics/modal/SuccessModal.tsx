import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { SubmitButton } from "../forms/SubmitButton";
import ModalStatus from "./ModalConf";
import { IconSucces } from "../Icons/IconSucces";
import {ToastContainer} from "react-toastify";

const SuccessModal = ({
    open,
    setOpen,
    children,
                          confirmationText
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
    children: React.ReactNode;
    confirmationText ?:string
}) => {
    return (
        <ModalStatus open={open} setOpen={() => null} className='z-20'>
            <div className="w-full lg:max-w-md ">
                <div className="w-full pb-6 relative">
                    <div className="absolute top-0 right-0 hidden sm:block">
                        {confirmationText == undefined &&<button
                            type="button"
                            className="rounded-md bg-white text-title hover:text-primary focus:ring-transparent focus:outline-none"
                            onClick={(e) => setOpen(false)}
                        >
                            <span className="sr-only">Fermer</span>
                            <XCircleIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button>}
                    </div>
                </div>
                <div className="w-full flex justify-center flex-wrap">
                    <IconSucces />
                    <span className="text-primary text-xl text-center font-bold w-full mt-4">
                        Succès!
                    </span>
                </div>
                <div className="mt-6 text-textColor font-medium text-base text-center">
                    {children}
                </div>
                <div className="mt-8 flex justify-center">
                    <SubmitButton onClick={(e) => setOpen(!!confirmationText)}>
                        {confirmationText??"Terminer"}
                    </SubmitButton>
                </div>
            </div>
        </ModalStatus>
    );
};

export default SuccessModal;
