import React, { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { classNames } from "../../../shared/helpers/utils";
import {ChevronDownIcon, ChevronUpDownIcon} from "@heroicons/react/24/outline";
import { useDebounce } from "../../../shared/helpers/hooks/useDebounce";

export type OptionsSearchSelect = {
    id: string;
    value: string;
    text: string;
};

interface OwnProps {
    disabled?: boolean;
    required?: boolean;
    label?: string;
    options: Array<OptionsSearchSelect>;
    selectedOption: OptionsSearchSelect | undefined;
    onChange: (o: OptionsSearchSelect) => void;
    errorMessage?: string;
    handleSearch: (text: string) => void;
    placeholder?: string;
    total: number;
    elementName: string;
}

export const InputSearchSelect: React.FC<OwnProps> = ({
    options,
    selectedOption,
    disabled,
    onChange,
    label,
    errorMessage,
    required,
    handleSearch,
    placeholder,
    elementName,
    total,
}): JSX.Element => {
    const [selected, setSelected] = useState(selectedOption);
    const [query, setQuery] = useState("");
    const debouncedSearchTerm = useDebounce({ value: query, delay: 500 });
    const [filteredOptions, setFilteredOptions] = useState<
        OptionsSearchSelect[]
    >([]);
    useEffect(() => {
        if (selectedOption !== undefined && selectedOption.id !== "0") {
            handleSelectedOption(selectedOption);
        }
        if (selectedOption === null) {
            setSelected(selectedOption);
        }
    }, [selectedOption]);

    const handleSelectedOption = (selected: OptionsSearchSelect) => {
        setSelected(selected);
        onChange(selected);
    };

    useEffect(
        () => {
            handleSearch(debouncedSearchTerm);
        },
        [debouncedSearchTerm] // Only call effect if debounced search term changes
    );

    useEffect(() => {
        setFilteredOptions(
            query === ""
                ? options
                : options.filter((person: OptionsSearchSelect) =>
                      person.text
                          .toLowerCase()
                          .replace(/\s+/g, "")
                          .includes(query.toLowerCase().replace(/\s+/g, ""))
                  )
        );
    }, [options.length, debouncedSearchTerm]);
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

            <Combobox value={selected} onChange={handleSelectedOption}>
                <div className="relative mt-1">
                    <div
                        className="relative w-full cursor-default overflow-hidden
                    rounded-lg  text-left focus:outline-none
                    focus-visible:ring-2 focus-visible:ring-white
                    focus-visible:ring-opacity-75 focus-visible:ring-offset-2
                     focus-visible:ring-offset-teal-300 sm:text-sm"
                    >
                        <Combobox.Input
                            placeholder={placeholder}
                            readOnly={disabled}
                            className={
                                "relative w-full cursor-default rounded-lg flex space-x-7 pl-[15px] pr-3 items-center h-11  text-left \n" +
                                "rounded-lg ring-1 ring-inset  ring-inputBorder focus:outline-none focus:ring-2 focus:ring-primary sm:text-md sm:leading-6\n" +
                                "                            " +
                                (selected?.id !== "0"
                                    ? "focus:outline-none text-xs text-oplirisBlack font-medium "
                                    : " text-textColor font-normal text-xs placeholder-textColor placeholder:font-normal") +
                                " " +
                                (disabled
                                    ? "bg-[#F7F8FB] text-[#E6EAEF] disabled:border-transparent border-transparent ring-0 focus:outline-none focus:ring-0"
                                    : "bg-transparent") +
                                ""
                            }
                            aria-disabled={disabled}

                            displayValue={(person: OptionsSearchSelect) =>
                                person.text
                            }
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button
                            aria-disabled={disabled}
                            className="absolute inset-y-0 right-0 flex items-center pr-2"
                        >
                            <ChevronDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options className="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredOptions.length === 0 && query !== "" ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Aucun coach / sponsor trouvé
                                </div>
                            ) : (
                                <>
                                    {filteredOptions.map(
                                        (person: OptionsSearchSelect) =>
                                            person.id !== "0" && (
                                                <Combobox.Option
                                                    key={person.id}
                                                    className={({ active }) =>
                                                        classNames(
                                                            active
                                                                ? "bg-primary text-white"
                                                                : "text-gray-900",
                                                            "relative cursor-default select-none py-2 pl-3 pr-9"
                                                        )
                                                    }
                                                    value={person}
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
                                                                {person.text}
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
                                                </Combobox.Option>
                                            )
                                    )}
                                    <Combobox.Option
                                        disabled={true}
                                        className={({ active }) =>
                                            classNames(
                                                " bg-accent text-base text-primary",
                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                        }
                                        value={null}
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
                                                    {filteredOptions.find(e=>e.id === "0")!== undefined?filteredOptions.length-1:filteredOptions.length} sur{" "}
                                                    {total ?? 0} {elementName}
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
                                    </Combobox.Option>
                                </>
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
            <span className=" left-0 right-0 bottom-[-18px] text-xs text-red">
                {errorMessage}
            </span>
        </div>
    );
};
