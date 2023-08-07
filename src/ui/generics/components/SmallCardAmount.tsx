import React from 'react';
import {maskEuroCurrency} from "../../../shared/helpers/mask/maskCurrency";
import {classNames} from "../../../shared/helpers/utils";

const SmallCardAmount = (
    {
        ico,
        icoBg,
        amount,
        title,
        description
    }:{
        ico:JSX.Element,
        amount:string
        icoBg:string
        title:string|null
        description:string
    }
) => {
    return (
        <div
            className={
                "border-[1px] border-[#E6EAEF] h-[140px] bg-oplirisGris rounded-[8px] flex flex-wrap pt-[14px] pb-[46px] px-[16px]"
            }
        >
            {(!!title || title===null) &&<div
                className={
                    "w-full mb-[12px] flex items-center justify-between"
                }
            >
                <div
                    className={
                        classNames("w-[75px] rounded  h-[24px]   ",
                        " flex justify-center items-center  text-center ",
                        !!title ?"bg-[#E6EAEF]":""
                        )
                    }
                >
                    {title !== null && <span
                        className={
                            "leading-[10px] text-[10px] text-center font-bold text-black"
                        }
                    >
                            {title}
                        </span>}
                </div>
            </div>}
        <div className={"w-full flex space-x-3"}>
            <div
                className={
                    classNames(`${icoBg}` ,
                        "w-[48px] h-[48px] rounded flex justify-center items-center")
                }
            >
                {ico}
            </div>
            <div className={"flex flex-wrap "}>
                <div
                    className={
                        "w-full font-medium text-[14px] text-[#727C8C]"
                    }
                >
                    {description}
                </div>
                <div
                    className={
                        "w-full text-[20px] font-bold text-oplirisBlack"
                    }
                >
                    {maskEuroCurrency(
                        amount ?? "0"
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default SmallCardAmount;
