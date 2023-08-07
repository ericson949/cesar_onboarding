import React from 'react';
import IMAGES from "../../../assets";

const LogoNav = () => {
    return (
        <div className={"w-full flex justify-center"}>
            <img src={IMAGES.logoWithText} className={"w-2/3 h-auto"} alt={"logo"}/>
        </div>
    );
};

export default LogoNav;
