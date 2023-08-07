import React from "react";
import { IconProps } from "./shared/IconProps";

export const IconDelete = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`${className??'lg:w-4 lg:h-4'}`}
            // className={className ?? "fill-title"}
        >
            <g
                id="Groupe_342"
                data-name="Groupe 342"
                transform="translate(-1359 -373)"
            >
                <rect
                    id="Rectangle_206"
                    data-name="Rectangle 206"
                    width="24"
                    height="24"
                    rx="4"
                    transform="translate(1359 373)"
                    fill="#e9fbf6"
                    opacity="0"
                />
                <g
                    id="Composant_16_2"
                    data-name="Composant 16 – 2"
                    transform="translate(1361.251 374.25)"
                >
                    <path
                        id="Tracé_519"
                        data-name="Tracé 519"
                        d="M21,6.73h-.08a78.776,78.776,0,0,0-15.8-.2l-2.04.2a.755.755,0,0,1-.83-.68.745.745,0,0,1,.67-.82l2.04-.2a81.144,81.144,0,0,1,16.11.2.751.751,0,0,1,.67.82A.741.741,0,0,1,21,6.73Z"
                        transform="translate(-2.246 -1.25)"
                    />
                    <path
                        id="Tracé_520"
                        data-name="Tracé 520"
                        d="M8.5,5.72a.615.615,0,0,1-.13-.01.753.753,0,0,1-.61-.86l.22-1.31c.16-.96.38-2.29,2.71-2.29h2.62c2.34,0,2.56,1.38,2.71,2.3l.22,1.3a.746.746,0,1,1-1.47.25l-.22-1.3c-.14-.87-.17-1.04-1.23-1.04H10.7c-1.06,0-1.08.14-1.23,1.03l-.23,1.3A.75.75,0,0,1,8.5,5.72Z"
                        transform="translate(-2.246 -1.25)"
                    />
                    <path
                        id="Tracé_521"
                        data-name="Tracé 521"
                        d="M15.21,22.75H8.79c-3.49,0-3.63-1.93-3.74-3.49L4.4,9.19a.752.752,0,0,1,1.5-.1l.65,10.07c.11,1.52.15,2.09,2.24,2.09h6.42c2.1,0,2.14-.57,2.24-2.09L18.1,9.09a.764.764,0,0,1,.8-.7.751.751,0,0,1,.7.8l-.65,10.07C18.84,20.82,18.7,22.75,15.21,22.75Z"
                        transform="translate(-2.246 -1.25)"
                    />
                    <path
                        id="Tracé_522"
                        data-name="Tracé 522"
                        d="M13.66,17.25H10.33a.75.75,0,0,1,0-1.5h3.33a.75.75,0,0,1,0,1.5Z"
                        transform="translate(-2.246 -1.25)"
                    />
                    <path
                        id="Tracé_523"
                        data-name="Tracé 523"
                        d="M14.5,13.25h-5a.75.75,0,0,1,0-1.5h5a.75.75,0,0,1,0,1.5Z"
                        transform="translate(-2.246 -1.25)"
                    />
                </g>
            </g>
        </svg>
    );
};
