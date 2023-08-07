import React, {useEffect} from 'react';

const UseClickOutside = ({ref, handleClickedOutside}:{
    ref:React.MutableRefObject<HTMLDivElement | null>
    handleClickedOutside: ()=>void
}) => {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event:any) {
            if (ref.current && !ref.current.contains(event.target)) {
                handleClickedOutside();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);


};

export default UseClickOutside;
