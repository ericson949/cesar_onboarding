import React from 'react';
import 'react-range-slider-input/dist/style.css';
import Slider from "./pagination/Slider";
import {formatSliderValueSuffix} from "../../../shared/helpers/formatSliderValueSuffix";
import {SliderSuffix} from "../../../shared/enums/SliderSuffix";


const CustomRangeSliderAmount = ({label, value, max, min=0, step="1",
                                     suffix, minSuffix,
                                     handleChange }:{
    label:string, value:number, max:number, min?:number, step?:string
    suffix:SliderSuffix, minSuffix?:SliderSuffix,
    handleChange:(value:number)=> void
}) => {

    return (
        <div className={" items-center gap-2 grid text-[14px] grid-cols-1"}>
            <div className={"w-full flex items-center justify-between"}>
                <span className={"font-medium text-[#727C8C]"}>{label}</span>
            </div>
            <div >
                <Slider
                    min={min}
                    maxString={formatSliderValueSuffix(max, suffix)}
                    minString={formatSliderValueSuffix(min, minSuffix??SliderSuffix.none)}
                    bubbleValue={formatSliderValueSuffix(value, suffix)}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleChange}
                    color={"#43B8B1"}
                />
            </div>

        </div>
    );
};

export default CustomRangeSliderAmount;
