import React from 'react';
import {Tab} from "@headlessui/react";
import {classNames} from "../../../shared/helpers/utils";

interface Tabs {
    [key:string]:React.ReactNode
}

export default function CustomTabsPanel({
                                            data
                                        }:{
    data: Tabs
}) {
    return (
        <div className="w-full px-2 py-16 mx-2 lg:mx-0 sm:px-0 lg:bg-white">
            <Tab.Group>
                <Tab.List className=" w-full items-center justify-start flex overflow-x-auto
                space-x-4 rounded-xl bg-transparent p-1
                transition-all duration-300">
                    {Object.keys(data).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full uppercase rounded-lg py-2.5 text-sm font-medium leading-5 text-text-[#2A3950]',
                                    ' ring-transparent  focus:outline-none focus:ring-0 ' +
                                    'flex text-center items-center justify-center ' +
                                    '',
                                    selected
                                        ?
                                        classNames('text-[#43B8B1] ',
                                            'bg-[#DCF2F0]'
                                        )
                                        : 'text-[#2A3950] hover:text-[#43B8B1] border border-[#E6EAEF]' +
                                        ' hover:border-[#DCF2F0]'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(data).map((child, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-transparent focus:outline-none ' +
                                ' focus:ring-0'
                            )}
                        >
                            {child}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
