import React from "react";

export const ProgressBar = ({ value }: { value: number }) => {
    return (
        <div className="w-full bg-inputBorder rounded-full h-2 mb-">
            <div
                className={`bg-primary h-2 rounded-l-full ${value === 100?'rounded-r-full':''}`}
                style={{ width: `${value}%` }}
            ></div>
        </div>
    );
};
