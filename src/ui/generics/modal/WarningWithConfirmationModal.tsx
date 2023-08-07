import React from "react";
import {XCircleIcon} from "@heroicons/react/24/outline";
import {SubmitButton} from "../forms/SubmitButton";
import ModalConf from "./ModalConf";
import {LoadingState} from "../../../shared/enums/LoadingState";
import {LoaderWithText} from "../loader/LoaderWithText";
import {IconWarning} from "../Icons/IconWarning";
import {classNames} from "../../../shared/helpers/utils";

const WarningWithConfirmationModal = ({
                                          open,
                                          children,
                                          title,
                                          cancelButtonRef,
                                          handleClick,
                                          loading,
    yesText, noText
                                      }: {
    open: boolean;
    children: React.ReactNode;
    ico?: React.ReactNode;
    cancelButtonRef?: React.RefObject<HTMLButtonElement>;
    loading?: LoadingState;
    title?: string;
    noText?: string;
    yesText ?: string;
    handleClick: (val?: boolean) => void;
}) => {
    return (
        <ModalConf open={open} setOpen={() => null} className='z-20'>
            <div className="w-full lg:max-w-xl ">
                <div className="w-full pb-6 relative">
                    <div className="absolute top-0 right-0 hidden sm:block">
                        <button
                            type="button"
                            className="rounded-md bg-white text-title hover:text-primary focus:ring-transparent focus:outline-none"
                            onClick={(e) => handleClick(undefined)}
                        >
                            <span className="sr-only">Fermer</span>
                            <XCircleIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
                <div className="w-full flex justify-center flex-wrap mb-8">
                    <IconWarning/>
                    <span className="text-[#FFA114] text-xl text-center font-bold w-full mt-4">
                        {title??"Informations"}
                    </span>
                </div>
                <div className="w-full">{children}</div>
                <div className="mt-8 flex justify-center space-x-4 pb-4">
                    <SubmitButton
                        className={classNames(
                            "text-white font-bold text-[14px]",
                            yesText ? "bg-[#FFA114]":
                            "bg-[#FF4E3E]   ")}
                        onClick={(e) => handleClick(true)}
                    >
                        {loading === LoadingState.pending ? (
                            <LoaderWithText text="Chargement..."/>
                        ) : (
                            yesText??"Oui"
                        )}
                    </SubmitButton>
                    <SubmitButton
                        ref={cancelButtonRef}
                        className={classNames(
                            noText?"bg-[#43B8B1] font-bold text-white text-[14px]"
                                :"bg-[#E6EAEF] text-[#727C8C] font-bold  text-[14px]"
                        )}
                        onClick={(e) => handleClick(false)}
                    >
                        {noText??"Non"}
                    </SubmitButton>
                </div>
            </div>
        </ModalConf>
    );
};

export default WarningWithConfirmationModal;
