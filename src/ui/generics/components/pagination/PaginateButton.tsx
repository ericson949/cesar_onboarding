import React from 'react';
import { OptionsSelect } from '../../forms/InputSelectForm';
import ButtonPrimary from '../../tailwind/ButtonPrimary';
import ButtonTernary from '../../tailwind/ButtonTernary';

const PaginateButton =({currentPage, btnButtonPaginate, onSelected}:{
    btnButtonPaginate:any
    currentPage?:OptionsSelect, onSelected(page:OptionsSelect):void})=>{

    const initialPage = {
        id: "01",
        text: "01",
        value: "20/0"
    }
    return <div className="w-fit lg:flex space-x-4 hidden justify-center">
        {btnButtonPaginate.map((btn:OptionsSelect)=>{
            return <React.Fragment key={ btn.id}>
                {currentPage && currentPage.text === btn.text
                        || !currentPage && btn.text === initialPage.text ? (
                    <ButtonPrimary 
                        onClick={(e)=>onSelected(currentPage || initialPage)}
                    >{btn.text.toString().padStart(2, "0")}</ButtonPrimary>
                ) : (
                    <ButtonTernary 
                    onClick={(e)=>onSelected(btn)} 
                    className="hidden lg:flex">
                        {btn.text.toString().padStart(2, "0")}
                    </ButtonTernary>
                )}
            </React.Fragment>;
        })}
    </div>
} 
export default PaginateButton;