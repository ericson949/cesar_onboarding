import React from "react";
import { Loader } from "./Loader";

interface Props {
    text: string;
    width?: number;
    height?: number;
}

export const LoaderWithText: React.FC<Props> = ({ height, width, text }) => {
    return (
        <>
            <span className="ml-1">{text}</span>
            <Loader height={height} width={width}></Loader>
        </>
    );
};
