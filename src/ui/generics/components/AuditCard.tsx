import React from 'react';

const AuditCard = ({title, data }:{title:string,data:React.ReactNode }) => {
    return (
        <div className={"bg-oplirisGris w-full min-h-[140px] rounded border border-[#E6EAEF] h-fit flex flex-wrap space-y-1 p-4"}>

            <div className={"h-6 px-4 w-fit flex items-center text-[#2A3950] text-[10px] font-bold bg-[#E6EAEF] rounded"}>
                {title}
            </div>
            <div className={"w-full "}>
                {data}
            </div>
        </div>
    );
};

export default AuditCard;
