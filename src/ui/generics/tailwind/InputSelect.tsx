import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { classNames } from "../../../shared/helpers/utils";

type OptionsSelect = {
    id: string;
    value: string;
    text: string;
};

interface OwnProps {
    disabled?: boolean;
    options: Array<OptionsSelect>;
    selectedOption: OptionsSelect | undefined;
    onChange: (o: OptionsSelect) => void;
}

const InputSelect: React.FC<OwnProps> = ({
    options,
    selectedOption,
    disabled,
    onChange,
}): JSX.Element => {
    const [selected, setSelected] = useState(selectedOption ?? options[0]);

    useEffect(() => {
        setSelected(selectedOption ?? options[0]);
    }, [selectedOption]);

    const handleSelectedOption = (selected: OptionsSelect) => {
        setSelected(selected);
        onChange(selected);
    };
    const max = options.length>50 ? 50: options.length;
    if(options.length===0){
        return <></>
    }
    return (
        <Listbox value={selected} onChange={handleSelectedOption}>
            {({ open }) => (
                <>
                    <div className="relative  h-fit">
                        <Listbox.Button
                            className={
                                "group relative w-full cursor-default rounded-md flex space-x-7 pl-[15px] pr-3 items-center  min-w-[72px] h-7   text-left \n" +
                                "rounded group ring-1 ring-inset font-bold text-oplirisBlack ring-inputBorder focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6\n" +
                                "                            " +
                                (disabled ? "group bg-[#F7F8FB] text-[#E6EAEF] disabled:border-transparent  border-transparent border-0 ring-0 focus:outline-none focus:ring-0" : "bg-inputBorder") +
                                ""
                            }
                            aria-disabled={disabled}
                        >
                            <span className="block truncate">
                                {selected ? selected.text : ""}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                    className="h-5 w-5 "
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
                            <Listbox.Options
                                className="absolute SelectedAnchor z-10 max-h-24 w-18 overflow-auto rounded-md px-1
                                bg-white py-1 text-base shadow-lg ring-1
                                ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                            >
                                {options.slice(0, max).map((option) => (
                                    <Listbox.Option
                                        key={option?.id ?? ""}
                                        className={({ active }) =>
                                            classNames(
                                                active
                                                    ? "bg-primary text-white rounded-md"
                                                    : "text-gray-900",
                                                "relative cursor-default select-none py-2 pl-3 w-16 "
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
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
};

export const InputSelectMemo = React.memo(InputSelect)