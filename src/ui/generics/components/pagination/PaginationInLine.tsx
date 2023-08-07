import React from "react";
import { LoadingState } from "../../../../shared/enums/LoadingState";
import { PaginationLIMITSelect } from "../../../../shared/helpers/pagination";
import { OptionsSelect } from "../../forms/InputSelectForm";
import { InputSelectMemo } from "../../tailwind/InputSelect";
import ButtonTernary from "../../tailwind/ButtonTernary";
import { IconArrowLeft } from "../../Icons/IconArrowLeft";
import PaginateButton from "./PaginateButton";
import { IconArrowRight } from "../../Icons/IconArrowRight";
import UsePaginationInline from "./usePaginationInLine";

const PaginationInLine = ({
    total,
    handleQuery,
    loading,
    selectedPage
}: {
    total: number;
    handleQuery: (link: string) => void;
    loading: LoadingState;
    selectedPage?: OptionsSelect;
}) => {
    
    const {
        btnButtonPaginate,
        isLast,
        resultPagination,
        currentIndex,
        currentPage,
        selectedLimit,
        handleChangeLimit,
        handleLoadPage
    } =  UsePaginationInline({
        total,
        handleQuery,
        loading,
        selectedPage
    });
    if (!(loading === LoadingState.success ||
        loading === LoadingState.failed )) {
        return <></>;
    }
    return (
        <div className={
            `${total===undefined? "invisible":"visible"}
            mt-auto h-fit flex items-center justify-between w-full
            `}>
            <div className="w-fit flex lg:space-x-5 items-center font-medium text-md ">
                <span className="hidden lg:block">
                    Nombre d'éléments par page
                </span>
                <InputSelectMemo
                    disabled={true}
                    options={PaginationLIMITSelect}
                    selectedOption={selectedLimit}
                    onChange={(e) => {
                        handleChangeLimit(e);
                    }}
                />
            </div>
            <div className="w-fit hidden lg:flex space-x-8">
                <div className="w-fit">
                    <ButtonTernary
                        disabled={
                            currentPage?.text === "01" ||
                            currentPage === undefined
                        }
                        onClick={(e) =>handleLoadPage(resultPagination[currentIndex - 1])
                        }
                    >
                        <IconArrowLeft />
                    </ButtonTernary>
                </div>
                <div className="w-fit lg:flex space-x-4 hidden ">
                    <PaginateButton

                        currentPage={currentPage}
                        btnButtonPaginate={btnButtonPaginate}
                        onSelected={(e) => {
                            handleLoadPage(e);
                        }}
                    />
                </div>
                <div className="w-fit">
                    <ButtonTernary
                        disabled={isLast}
                        onClick={(e) =>handleLoadPage(resultPagination[currentIndex + 1])
                        }
                    >
                        <IconArrowRight />
                    </ButtonTernary>
                </div>
            </div>
            <div className="w-fit flex lg:space-x-5 items-center font-medium text-md relative">
                <span className="hidden lg:block">Page</span>
                    <InputSelectMemo
                    options={resultPagination}
                    selectedOption={currentPage??resultPagination[0]}
                    onChange={(e) => {
                        handleLoadPage(e);
                    }}
                />
            </div>
        </div>
    );
};

export default PaginationInLine;
