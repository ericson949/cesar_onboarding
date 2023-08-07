import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { SubmitButton } from "../forms/SubmitButton";
import ModalConf from "./ModalConf";
import { LoadingState } from "../../../shared/enums/LoadingState";
import { LoaderWithText } from "../loader/LoaderWithText";

const ConfirmationModal = ({
    open,
    children,
    ico,
    cancelButtonRef,
    handleClick,
    loading,
}: {
    open: boolean;
    children: React.ReactNode;
    ico?: React.ReactNode;
    cancelButtonRef?: React.RefObject<HTMLButtonElement>;
    loading?: LoadingState;
    handleClick: (val: boolean) => void;
}) => {
    return (
        <ModalConf open={open} setOpen={() => null} className='z-20'>
            <div className="w-full lg:max-w-xl ">
                <div className="w-full pb-6 relative">
                    <div className="absolute top-0 right-0 hidden sm:block">
                        <button
                            type="button"
                            className="rounded-md bg-white text-title hover:text-primary focus:ring-transparent focus:outline-none"
                            onClick={(e) => handleClick(false)}
                        >
                            <span className="sr-only">Fermer</span>
                            <XCircleIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
                <div className="w-full">{children}</div>
                <div className="mt-8 flex justify-center space-x-4 pb-4">
                    <SubmitButton
                        className="bg-[#FF4E3E]  text-white text-sm "
                        onClick={(e) => handleClick(true)}
                    >
                        {loading === LoadingState.pending ? (
                            <LoaderWithText text="Chargement..." />
                        ) : (
                            "Supprimer"
                        )}
                    </SubmitButton>
                    <SubmitButton
                        ref={cancelButtonRef}
                        className="bg-[#E6EAEF] text-[#727C8C] text-sm"
                        onClick={(e) => handleClick(false)}
                    >
                        Annuler
                    </SubmitButton>
                </div>
            </div>
        </ModalConf>
    );
};

export default ConfirmationModal;
