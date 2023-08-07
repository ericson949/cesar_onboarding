import React, {useRef, useState} from 'react';
import {classNames} from "../../../../../shared/helpers/utils";
import useClickOutside from "../../../../../shared/helpers/hooks/useClickOutside";
import IconDeleteImg from "../../../Icons/IconDeleteImg";


const ManageFile = ({link, id,title, handleDelete}: { link: string, id: number, title:string;
    handleDelete: (e:React.MouseEvent<HTMLButtonElement>, id:number) => void }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isClicked, setIsClicked] = useState<boolean>(false)

    const handleClickedOutside = () => {
        setIsClicked(false);
    }

    useClickOutside({
        ref: ref,
        handleClickedOutside: handleClickedOutside
    })
    return (
        <div ref={ref} className={classNames("flex flex-wrap relative group",
            isClicked ? "border border-primary" : ""
        )}>

            <embed
                   className="cursor-pointer col-auto w-auto h-[200px]
                   "
                 src={link}/>
            <button
                type={"button"} onClick={(e)=> handleDelete(e, id)}
                className={classNames("w-5 h-5 rounded-full bg-primary",
                " right-[-4px] top-[-4px]  absolute  justify-center items-center",
                isClicked ? "flex" : "hidden group-hover:flex"
            )}>
                <IconDeleteImg />
            </button>
            <span className={"w-full mt-2 font-bold text-center"}>{title}</span>
        </div>
    );
};

export default ManageFile;
