import React from "react";
import { IconProps } from "./shared/IconProps";

export const IconEdit = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`lg:w-4 lg:h-4 ${className??'fill-primary'}`}
        >
            <g
                id="Groupe_341"
                data-name="Groupe 341"
                transform="translate(-1322 -374)"
            >
                <rect
                    id="Rectangle_205"
                    data-name="Rectangle 205"
                    width="24"
                    height="24"
                    rx="4"
                    transform="translate(1322 374)"
                    fill="#e9fbf6"
                    opacity="0"
                />
                <g
                    id="Composant_15_2"
                    data-name="Composant 15 – 2"
                    transform="translate(1323.124 375.124)"
                >
                    <path
                        id="Tracé_516"
                        data-name="Tracé 516"
                        d="M15,22.75H9c-5.43,0-7.75-2.32-7.75-7.75V9C1.25,3.57,3.57,1.25,9,1.25h2a.75.75,0,0,1,0,1.5H9C4.39,2.75,2.75,4.39,2.75,9v6c0,4.61,1.64,6.25,6.25,6.25h6c4.61,0,6.25-1.64,6.25-6.25V13a.75.75,0,0,1,1.5,0v2C22.75,20.43,20.43,22.75,15,22.75Z"
                        transform="translate(-1.25 -0.997)"
                    />
                    <path
                        id="Tracé_517"
                        data-name="Tracé 517"
                        d="M8.5,17.69a2.142,2.142,0,0,1-2.17-2.57l.43-3.01a3.468,3.468,0,0,1,.87-1.74l7.88-7.88c1.99-1.99,4.01-1.99,6,0A4.175,4.175,0,0,1,22.99,5.8a4.448,4.448,0,0,1-1.48,2.68l-7.88,7.88a3.468,3.468,0,0,1-1.74.87l-3.01.43A1.668,1.668,0,0,1,8.5,17.69ZM16.57,3.55,8.69,11.43a2.035,2.035,0,0,0-.45.89l-.43,3.01a.785.785,0,0,0,.17.68.785.785,0,0,0,.68.17l3.01-.43a1.983,1.983,0,0,0,.89-.45l7.88-7.88a3.069,3.069,0,0,0,1.04-1.77,2.776,2.776,0,0,0-1.04-2.11C18.84,1.94,17.74,2.39,16.57,3.55Z"
                        transform="translate(-1.25 -0.997)"
                    />
                    <path
                        id="Tracé_518"
                        data-name="Tracé 518"
                        d="M19.85,9.83a.645.645,0,0,1-.2-.03,7.937,7.937,0,0,1-5.46-5.46.76.76,0,0,1,.52-.93.745.745,0,0,1,.92.52,6.425,6.425,0,0,0,4.42,4.42.755.755,0,0,1,.52.93A.736.736,0,0,1,19.85,9.83Z"
                        transform="translate(-1.25 -0.997)"
                    />
                </g>
            </g>
        </svg>
    );
};
