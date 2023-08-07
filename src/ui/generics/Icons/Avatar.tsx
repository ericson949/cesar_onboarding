import React from 'react';
import {IconWoman} from "./IconWoman";
import IconMan from "./IconMan";

const Avatar = ({title, className, name}:{title:string,name?:string|null, className?:string}) => {
    // return title === '1'?<IconWoman className={className}/>:<IconMan className={className}/>;
    return <div className={`uppercase font-bold ${className??'text-sm text-white w-8 h-8 bg-primary'} rounded-full flex justify-center items-center`}>
        {name?.substring(0,1)}
    </div>
};


export default Avatar;
