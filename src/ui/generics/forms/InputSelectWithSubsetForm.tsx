import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { classNames } from "../../../shared/helpers/utils";
import {string} from "yup";


export interface OptionSelectWithSub  {
    label:string
    children:OptionsSelect[]
}
export type OptionsSelect = {
    id: string;
    value: string;
    text: string;
};

interface OwnProps {
    disabled?: boolean;
    required?: boolean;
    label?: string;
    options: Array<OptionSelectWithSub>;
    selectedOption: OptionsSelect | undefined;
    onChange: (o: OptionsSelect) => void;
    errorMessage?: string;
    className?: string;
}

export const InputSelectWithSubsetForm: React.FC<OwnProps> = ({
    options,
    selectedOption,
    disabled,
    onChange,
    label,
    errorMessage,
    required,
    className,
}): JSX.Element => {
    const [selected, setSelected] = useState(selectedOption);

    useEffect(() => {
        if (selectedOption !== undefined) {
            handleSelectedOption(selectedOption);
        }
        if (selectedOption === null) {
            setSelected(selectedOption);
        }
    }, [selectedOption]);

    const handleSelectedOption = (selected: OptionsSelect) => {
        setSelected(selected);
        onChange(selected);
    };
    return (
        <div className="w-full space-y-1 relative">
            {label && (
                <label
                    htmlFor="civility"
                    className={`w-full font-medium text-md text-textColor  ${
                        required ? "after:content-['*']" : ""
                    } after:ml-0.5 after:text-orange`}
                >
                    {label}
                </label>
            )}

            <Listbox value={selected} onChange={handleSelectedOption}>
                {({ open }) => (
                    <>
                        <div
                            className={`relative ${
                                label ? "mt-1" : ""
                            } h-fit w-full`}
                        >
                            <Listbox.Button
                                className={
                                    "relative w-full cursor-default rounded-md flex space-x-7 pl-[15px] pr-3 items-center h-11  text-left \n" +
                                    "rounded-xl ring-1 ring-inset  ring-inputBorder focus:outline-none focus:ring-2 focus:ring-primary sm:text-md sm:leading-6\n" +
                                    "                            " +
                                    (selected?.id === "0"
                                        ? "focus:outline-none  text-textColor/50 font-normal"
                                        : "text-oplirisBlack font-bold") +
                                    " " +
                                    (disabled
                                        ? "bg-border ring-0 focus:outline-none"
                                        : className ?? "bg-transparent") +
                                    ""
                                }
                                aria-disabled={disabled}
                            >
                                <span
                                    className={`block truncate ${
                                        selected?.id != "0"
                                            ? "text-title font-medium"
                                            : ""
                                    }`}
                                >
                                    {selected ? selected.text : ""}
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-1 flex items-center pr-2">
                                    <ChevronDownIcon
                                        className="h-5 w-5 text-oplirisBlack"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-30 mt-0 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {options.map((subOptions) => (
                                        <React.Fragment key={subOptions.label}>
                                            <span
                                                className={classNames(
                                                         "font-light opacity-50 ml-3 text-[13px]",
                                                    "block truncate"
                                                )}
                                            >
                                                        {subOptions.label}
                                                    </span>
                                            {
                                                subOptions.children.map((option)=> option.id !=="0" &&(
                                                    <Listbox.Option
                                                        key={option.id}
                                                        className={({ active }) =>
                                                            classNames(
                                                                active
                                                                    ? "bg-primary text-white"
                                                                    : "text-gray-900",
                                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                                            )
                                                        }
                                                        value={option}
                                                    >
                                                        {({ selected, active }) => (
                                                            <>
                                                    <span
                                                        className={classNames(
                                                            selected
                                                                ? "font-semibold"
                                                                : "font-normal",
                                                            "block truncate"
                                                        )}
                                                    >
                                                        {option.text}
                                                    </span>

                                                                {selected ? (
                                                                    <span
                                                                        className={classNames(
                                                                            active
                                                                                ? "text-white"
                                                                                : "text-primary",
                                                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                        )}
                                                                    >
                                                            <CheckIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                                ) : null}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))
                                            }

                                        </React.Fragment>

                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
            <span className=" left-0 right-0 bottom-[-18px] text-xs text-red">
                {errorMessage}
            </span>
        </div>
    );
};
