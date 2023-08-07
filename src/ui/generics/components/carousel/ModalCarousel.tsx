import {ModalWithBlur} from "../../modal/Modal";
import {XCircleIcon} from "@heroicons/react/24/outline";
import React, {useEffect, useRef, useState} from "react";
import {classNames} from "../../../../shared/helpers/utils";
import {IconLeft} from "../../Icons/IconLeft";
import {IconRight} from "../../Icons/IconRight";

function formatLinks(data:string[]) {
    return (data??[]).map((link, id)=> ({
        id: id,
        img: link
    }))
}
const ModalCarousel = ({open, setOpen, imagesLinks}:{
    open:boolean
    setOpen:(bool:boolean)=>void,
    imagesLinks: string[]
}) => {
    const data = formatLinks(imagesLinks)
    const [viewedImage, setViewedImage]= useState(data[0])
    const ref= useRef<HTMLDivElement>(null);

    const handleNext =()=>{
        const items = data.find(img=> img.id > viewedImage?.id)
        setViewedImage(items??data[0])
    }
    const handlePrev =()=>{
        const items = data.find(img=> img.id === viewedImage?.id-1)
        setViewedImage(items??data[data.length-1])
    }
    useEffect(()=> {
        if(data.length===0){
            setOpen(false);
        }
        if(ref.current){
            ref.current.scrollLeft = 220* (viewedImage?.id-3)
        }
        if(ref.current){
            ref.current.addEventListener("wheel", function (e){
                if (e.deltaY > 0 && ref.current) {
                    ref.current.scrollLeft += 200;
                    e.preventDefault();
                }
                else if(ref.current && e.deltaY < 0) {
                    ref.current.scrollLeft -= 200;
                    e.preventDefault();
                }
            })
        }
    },[viewedImage?.id])
    if(data.length===0){
        return <></>
    }
    return <ModalWithBlur  className2={"h-full w-full bg-black/50 " } open={open} setOpen={() => null}>
        <div className={"h-full w-full  flex justify-center  flex-wrap relative"}>
            <div className={'h-full w-full  flex flex-wrap justify-center'}>
                <button onClick={()=>setOpen(false)} className={"text-[#2A3950]"}>
                    <XCircleIcon className={"w-8 h-8 "} />
                </button>
                <div className={"w-full mt-10 h-[440px] transition-all duration-300 ease-in-out overflow-hidden  flex items-center relative"}>
                    <button onClick={()=>handlePrev()} className={"hidden " +
                        " text-white hover:text-primary hover:scale-105 duration-300 ease-in-out md:inline-block "}>
                        <IconLeft />
                    </button>
                    <div className={"w-full justify-center flex mx-10"}>
                        <img loading={"lazy"} className={"h-full md:h-[600px] object-scale-down"} alt={"eee"} src={viewedImage?.img}/>
                    </div>
                    <button
                        onClick={()=>handleNext()}
                        className={"hidden text-white hover:text-primary hover:scale-105 duration-300 ease-in-out md:inline-block "}>
                        <IconRight />
                    </button>
                </div>
                <div className={"w-full flex items-center relative mt-auto"}>

                    <div
                        ref={ref}
                        id={"slider"} className={"w-full space-x-2 py-2 h-full  flex items-center " +
                        " overflow-x-scroll scroll scroll-smooth horizontal-scroll"}>
                        {
                            (data??[]).map((img)=>(
                                <img
                                    key={img.id}
                                    loading={"lazy"}
                                    onClick={()=> setViewedImage(img)}
                                    className={
                                        classNames("w-[220px] h-[220px] hover:scale-105 duration-300 " ,
                                            " ease-in-out inline-block cursor-pointer object-cover rounded",
                                            viewedImage?.id===img.id ? "border-primary border-4 ": ""
                                        )}
                                    src={img.img} alt={"/"}/>))
                        }
                    </div>
                </div>
            </div>

        </div>
    </ModalWithBlur>

};

export default ModalCarousel;
