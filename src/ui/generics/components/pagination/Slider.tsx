import React, { useState } from 'react';

const Slider = ({ min, max, value, onChange, color, minString, maxString, bubbleValue, step }:{
    min:number;
    max:number;
    step:string;
    maxString:string;
    minString:string;
    value:number;
    bubbleValue:string;
    onChange :(value:number)=>void;
    color:string
}) => {
    const handleChange =(value:string)=>{
        onChange(parseFloat(value))
    }
    const newValue = Number( (value - min) * 100 / (max - min) )
    const newPosition = 10 - (newValue * 0.2);
    return (
        <div className={"w-full flex items-center flex-wrap space-y-2 mt-12"}>
            <div className="range-slider-group range-slider-group-red w-full">
                <div className="range-value" id="rangeV"
                style={{
                    left:`calc(${newValue}% + (${newPosition}px))`,
                    backgroundColor:"#43B8B1"
                }}
                >
                    <span>{bubbleValue}</span></div>
                <input type="range" min={min} max={max} value={value} data-color="#f00"
                       step={step}
                       onChange={(event)=>handleChange(event.target.value)}
                       style={{
                           background:`linear-gradient(to right, ${color} 0%, ${color} calc(${newValue}% + (${newPosition}px)), #E6EAEF calc(${newValue}% + (${newPosition}px)), #E6EAEF 100%)`}}
                       className="range-slider range-slider-red" id="range-slider-red"/>
            </div>
            <div className={"w-full flex justify-between font-bold text-[12px] text-[#2A3950]"}>
                <span>{minString}</span>
                <span>{maxString}</span>
            </div>
        </div>
    );
};
//linear-gradient(to right, #f00 0%, #f00 ${newValue}%, #fff ${newValue}%, #fff 100%)`
export default Slider;
