import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { classNames } from "../../../shared/helpers/utils";

type OptionsSelect = {
    countryCode: string;
    countryPhoneCode: string;
    countryText: string;
    flag: any;
};

interface OwnProps {
    disabled?: boolean;
    options: Array<OptionsSelect>;
    selectedOption: OptionsSelect | undefined;
    onChange: (o: OptionsSelect) => void;
}

export const SelectPhone: React.FC<OwnProps> = ({
    options,
    selectedOption,
    disabled,
    onChange,
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
        <Listbox value={selected} onChange={handleSelectedOption}>
            {({ open }) => (
                <>
                    <div className="relative mt-1 h-full w-20">
                        <Listbox.Button
                            className={
                                "border-transparent relative w-full cursor-default rounded-md flex space-x-7 pl-[15px] pr-3 items-center h-[56px]  text-left \n" +
                                "rounded-xl  outline-none  sm:text-md sm:leading-6\n"
                            }
                            aria-disabled={disabled}
                        >
                            <span className="block truncate">
                                {selected ? selected.countryPhoneCode : ""}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
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
                            <Listbox.Options className="absolute z-10 lg:min-w-24 lg:max-w-xs mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {options.map((option) => (
                                    <Listbox.Option
                                        key={option.countryCode}
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
                                                    {option.countryText}
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
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
};
