import React, {useRef, useState} from 'react';
import {classNames} from "../../../../../shared/helpers/utils";
import useClickOutside from "../../../../../shared/helpers/hooks/useClickOutside";
import IconDeleteImg from "../../../Icons/IconDeleteImg";


const ManageImg = ({image, id, handleDelete}: { image:string, id: number,
    handleDelete: (e:React.MouseEvent<HTMLButtonElement>, id:number) => void }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isClicked, setIsClicked] = useState<boolean>(false)

    const handleClickedOutside = () => {
        setIsClicked(false);
    }
    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation();
        e.preventDefault();
        setIsClicked(true)
    }
    useClickOutside({
        ref: ref,
        handleClickedOutside: handleClickedOutside
    })
    return (
        <div ref={ref} className={classNames("flex relative group",
            isClicked ? "border border-primary" : ""
        )}>
            <div onClick={handleClick} className={" cursor-pointer  col-auto h-[156px]"}>
                <img alt={"img-" + id}  className="object-cover w-auto h-full"
                     src={image}/>
            </div>

            <button
                type={"button"} onClick={(e)=> handleDelete(e, id )}
                className={classNames("w-5 h-5 rounded-full bg-primary",
                " right-[-4px] top-[-4px]  absolute  justify-center items-center",
                isClicked ? "flex" : "hidden group-hover:flex"
            )}>
                <IconDeleteImg />
            </button>
        </div>
    );
};

export default ManageImg;
