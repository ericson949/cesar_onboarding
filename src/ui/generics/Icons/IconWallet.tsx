import React from "react";
import { IconProps } from "./shared/IconProps";
import {boolean} from "yup";

export const IconWallet = ({ isView }: {isView?:boolean}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={isView?"25": "40"} height={isView?"25": "40"} viewBox="0 0 40 40">
            <g id="Groupe_19507" data-name="Groupe 19507" transform="translate(-291 -689)">
                <rect id="Rectangle_4306" data-name="Rectangle 4306" width="40" height="40" transform="translate(291 689)" fill="none"/>
                <g id="Groupe_19488" data-name="Groupe 19488" transform="translate(-9 -5)">
                    <rect id="Rectangle_4286" data-name="Rectangle 4286" width="40" height="40" transform="translate(300 694)" fill="#fff" opacity="0"/>
                    <g id="Groupe_19445" data-name="Groupe 19445" transform="translate(300 694)">
                        <path id="Tracé_31979" data-name="Tracé 31979" d="M158.552,228.948h-18.6c-6.4,0-10.7-4.3-10.7-10.7v-9.3c0-5.73,3.535-9.879,9.023-10.567a11.98,11.98,0,0,1,1.674-.13h18.6a10.585,10.585,0,0,1,1.619.112c5.488.633,9.079,4.8,9.079,10.586v9.3C169.25,224.65,164.952,228.948,158.552,228.948Zm-18.6-27.907a9.979,9.979,0,0,0-1.3.093c-4.093.521-6.6,3.5-6.6,7.814v9.3c0,4.8,3.107,7.907,7.907,7.907h18.6c4.8,0,7.907-3.107,7.907-7.907v-9.3c0-4.353-2.549-7.349-6.679-7.833a7.117,7.117,0,0,0-1.228-.074Z" transform="translate(-129.25 -188.952)" fill="#1f75b4"/>
                        <path id="Tracé_31980" data-name="Tracé 31980" d="M134.839,205.453a1.4,1.4,0,0,1-1.135-.577,1.367,1.367,0,0,1-.112-1.451,6.682,6.682,0,0,1,1.34-1.8l6.047-6.065a7.962,7.962,0,0,1,11.2,0l3.256,3.293a7.725,7.725,0,0,1,2.307,5.116,1.4,1.4,0,0,1-.465,1.116,1.385,1.385,0,0,1-1.154.335,7.922,7.922,0,0,0-1.172-.074h-18.6a9.979,9.979,0,0,0-1.3.093A.7.7,0,0,1,134.839,205.453Zm3.107-2.9h16.67a4.953,4.953,0,0,0-1.154-1.73l-3.274-3.312a5.189,5.189,0,0,0-7.256,0Z" transform="translate(-125.648 -193.252)" fill="#1f75b4"/>
                        <path id="Tracé_31981" data-name="Tracé 31981" d="M154.948,213.983h-5.581a5.116,5.116,0,1,1,0-10.233h5.581a1.4,1.4,0,1,1,0,2.791h-5.581a2.326,2.326,0,1,0,0,4.651h5.581a1.4,1.4,0,1,1,0,2.791Z" transform="translate(-116.343 -184.22)" fill="#1f75b4"/>
                    </g>
                </g>
            </g>
        </svg>

    );
};
