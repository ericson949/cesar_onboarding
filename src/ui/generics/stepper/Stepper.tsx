import React from "react";
import { ProgressBar } from "../progress-bar/ProgressBar";
import { useAppSelector } from "../../../app/hooks";
import { selectPatrimonialAudit } from "../../../features/patrimonial-audit/PatrimonialAuditSlice";
import {classNames} from "../../../shared/helpers/utils";
type StepperProps = {
    headers: StepperOption[];
    progressText: string;
    progressValue: number;
    currentStep: number;
    lastStep: number;
    onChanged: (step: number) => void;
};

export type StepperOption = {
    title: string;
    step: number;
    completed: boolean;
};

export const Stepper = (props: StepperProps) => {
    const {
        headers,
        progressValue,
        lastStep,
        progressText,
        currentStep,
        onChanged,
    } = props;
    const onChangedStepHandler = (step: number) => {
        onChanged(step);
    };

    const patrimonialAudit = useAppSelector(selectPatrimonialAudit);
    const stepEight = patrimonialAudit.stepEight;
    // ${currentStep > e.step ? 'bg-primary text-white border-white'
    //                                   : currentStep == e.step ? 'bg-accent border-primary/40' : 'bg-white border-inputBorder border-r-[0]'}
    return (
        <div>
            <div className="flex mb-2 justify-between px-4 md:px-0 gap-3 md:gap-0 lg:pr-8">
                {headers.map((e, index) => {
                    return (
                        <React.Fragment key={`stepper ${e.step}`}>
                            <div
                                onClick={() => onChangedStepHandler(e.step)}
                                className={`relative cursor-pointer hidden  font-medium rounded-md text-xs h-11
                                flex-1 md:flex items-center text-center justify-center tooltip group

                                ${
                                    (lastStep > e.step ||
                                        (lastStep === 8 && !!stepEight)) &&
                                    currentStep !== e.step
                                        ? "bg-primary text-white border-white"
                                        : (lastStep > e.step ||
                                              (lastStep === 8 && !!stepEight)) &&
                                          currentStep === e.step
                                        ? "text-white" +
                                          " bg-[#EF6337] border-[#EF6337]"
                                        : currentStep === e.step ||
                                          e.step === lastStep
                                        ? "bg-accent text-[#43B8B1] border-primary/40"
                                        : "bg-white border-inputBorder border-r-[0]"
                                }

                                ${
                                    currentStep - 1 === e.step && e.step != 1
                                        ? "border-r-[0]"
                                        : ""
                                }
                                  border-solid border-[0.5px]
                                ${
                                    headers.length === e.step
                                        ? "border-r-[1px]"
                                        : ""
                                }
                                `}
                            >
                                {/*large screen*/}
                                <span className={
                                    classNames("md:hidden lg:flex overflow-hidden text-ellipsis",
                                    "h-11 w-full items-center font-medium justify-center ",
                                    "py-1 px-2 text-[12px]",
                                    )}>
                                    <p className="truncateText">{e.title}</p>
                                </span>
                                {/*small screen*/}
                                <span className="md:block lg:hidden text-xl text-center font-bold

                                ">
                                    {e.step}
                                </span>
                                {/*arrow*/}
                                <span className="absolute inset-y-0 right-[-0px] z-10 flex items-center">
                                    <div
                                        className={`transform translate-x-1/2 rotate-45 w-3 h-3 border-solid border-[0.5px]
                                        ${
                                            (lastStep > e.step ||
                                                (lastStep === 8 &&
                                                    !!stepEight)) &&
                                            currentStep !== e.step
                                                ? "bg-primary text-white border-white border-l-primary border-b-primary border-l-0"
                                                : (lastStep > e.step ||
                                                      (lastStep === 8 &&
                                                          !!stepEight)) &&
                                                  currentStep === e.step
                                                ? "bg-[#EF6337] border-r-[#EF6337] border-t-[#EF6337] border-l-0 border-b-0"
                                                : currentStep === e.step
                                                ? "bg-accent border-r-primary/40 border-t-primary/40"
                                                : "bg-white border-white border-r-inputBorder border-t-inputBorder"
                                        }
                                         rounded-r-[2px]
                                        `}
                                    ></div>
                                </span>
                                <div
                                    id="tooltip-default"
                                    role="tooltip"
                                    className={`
                                        absolute z-10
                                         px-3 py-2 text-sm font-medium top-11
                                         w-fit
                                         ml-[-48px] whitespace-nowrap
                                         flex justify-center
                                         transition-opacity duration-300
                                          rounded-lg shadow-sm  tooltip
                                          opacity-0 invisible group-hover:visible group-hover:opacity-100 lg:hidden bg-primary border-none text-white
                                        `}
                                >
                                    {e.title}
                                    <div
                                        className="tooltip-arrow"
                                        data-popper-arrow
                                    ></div>
                                </div>
                            </div>
                            <div
                                onClick={() => onChangedStepHandler(e.step)}
                                className={`cursor-pointer md:hidden w-full h-2 rounded-[4px] ${
                                    lastStep >= e.step && currentStep !== e.step
                                        ? "bg-primary"
                                        : lastStep >= e.step &&
                                          currentStep == e.step
                                        ? "bg-[#EF6337]"
                                        : currentStep == e.step
                                        ? "bg-accent"
                                        : "bg-inputBorder"
                                }`}
                            ></div>
                        </React.Fragment>
                    );
                })}
            </div>
            <div className=" items-center hidden lg:flex">
                <ProgressBar value={progressValue} />{" "}
                <span className="text-xs font-medium  text-textColor w-6 ml-2">
                    {progressText}%
                </span>
            </div>
        </div>
    );
};
