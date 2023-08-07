import React from "react";
import {classNames} from "../../../shared/helpers/utils";
import {IconButton} from "../components/buttons/IconButton";
import {IconAlert} from "../Icons/IconAlert";

export const LabelForm = ({
                              name,
                              children,
                              required,
                              label,
                              tooltip
                          }: {
    name?: string;
    required?: boolean;
    label: string;
    tooltip?: string;
    children ?:React.ReactNode
}) => {
    return (
        <label
            htmlFor={name}
            className={
                classNames("w-full font-medium text-md text-textColor relative ",
                    " after:ml-0.5 after:text-orange ",
                    tooltip? " z-50 ":"",
                    required ? " after:content-['*']" : "")
            }
        >
            {label}
            {(tooltip || children) && <span className={"absolute z-50 right-100 ml-4 bg-[#FCE0D7] p-1 rounded-full -mt-1  "}>
                        <IconButton tooltip={tooltip??children} tooltipCss2={"w-[400px] whitespace-pre-wrap } "}>
                            <IconAlert className="fill-[#EF6337] w-4 h-4"/>
                        </IconButton>
                    </span>}
        </label>
    );
};
