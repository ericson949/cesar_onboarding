import React from "react";

type Props = {
    className?: string;
};

export const BackgroundStepper = ({ className }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="131.827"
            height="44.143"
            viewBox="0 0 131.827 44.143"
            className={className}
        >
            <path
                id="Union_2"
                data-name="Union 2"
                d="M4,43.642a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0H117.349a4,4,0,0,1,4,4V14.777l9,5.321a2,2,0,0,1,0,3.443l-9,5.321V39.642a4,4,0,0,1-4,4Z"
                transform="translate(0.249 0.251)"
                // fill="#d9f1ef"
                // stroke="#43b8b1"
                strokeWidth="0.5"
                opacity="0.4"
            />
        </svg>
    );
};
