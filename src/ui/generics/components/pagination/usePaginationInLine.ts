import { useState} from "react";
import { OptionsSelect } from "../../forms/InputSelectForm";
import usePagination from "../../../../shared/helpers/hooks/usePagination";
import { getPaginationButtonGenerator } from "../../../../shared/helpers/hooks/getPaginationButtonGenerator";
import { PaginationLIMITSelect } from "../../../../shared/helpers/pagination";
import { LoadingState } from "../../../../shared/enums/LoadingState";


const initialPage = "1";
const initalPattern = "/0";

interface UseParams {
    total: number;
    handleQuery: (link: string) => void;
    loading: LoadingState;
    selectedPage?: OptionsSelect;
}

interface  PaginationInlineBehaviour {
    isLast:boolean;
    resultPagination: OptionsSelect[];
    currentPage?: OptionsSelect;
    selectedLimit: OptionsSelect;
    handleChangeLimit: (e:OptionsSelect)=> void;
    handleLoadPage : (e:OptionsSelect)=> void;
    currentIndex : number;
    btnButtonPaginate: OptionsSelect[]
}
const UsePaginationInline = (
    {
        total,
        handleQuery,
        loading,
        selectedPage
    }: UseParams
): PaginationInlineBehaviour => {

    const [selectedLimit, setSelectedLimit] =
        useState<OptionsSelect>(
        PaginationLIMITSelect[0]
    );
    const [currentPage, setCurrentPage] =
        useState<OptionsSelect | undefined>(selectedPage);

    const resultPagination = usePagination({
        limit: parseInt(selectedLimit.value),
        total,
    });
    const limit = parseInt(selectedLimit.value );
    const btnButtonPaginate =
        getPaginationButtonGenerator(
        parseInt((currentPage?.id)?? initialPage),
        Math.ceil(total / limit),
        3
        )
            .map((element, id) => ({
            text: element.toString().padStart(2, "0"),
            id:element !== "..."
                    ? element.toString().padStart(2, "0")
                : element.toString().padStart(2, "0") + id.toString(),
            value: element !== "..."
                ? limit.toString() + "/" + (((element as number) - 1) * limit).toString()
                : element,
        }));
    const isLast = btnButtonPaginate.slice(-1)[0].id === (!!currentPage? currentPage?.id : "01");

    const handleChangeLimit = (e: OptionsSelect) => {
        setSelectedLimit(e);
        handleQuery((e.value) + initalPattern);
        setCurrentPage(e);
    };
    const currentIndex =
        currentPage === undefined
            ? 0
            : resultPagination.findIndex((url) => url.value === currentPage?.value);

    const handleLoadPage = (e: OptionsSelect) => {
        handleQuery(e.value);
        setCurrentPage(e);
    }

    return {
        isLast,
        btnButtonPaginate,
        resultPagination,
        currentPage,
        selectedLimit,
        currentIndex,
        handleChangeLimit,
        handleLoadPage
    };
};

export default UsePaginationInline;