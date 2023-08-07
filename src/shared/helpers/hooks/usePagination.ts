import { useEffect, useState } from "react";
import {OptionsSelect} from "../../../ui/generics/forms/InputSelectForm";

export interface PaginationBehaviour {
    toOptionsSelect: ()=> OptionsSelect[]
}
interface  useParams {
    limit: number;
    total: number;

}


function usePagination({limit, total}:useParams
                           ) {
    const [result, setResult]=useState<OptionsSelect[]>([]);

    useEffect(()=>{
        const normalizedTotal = total <1?1:total;
        const totalPage = Math.ceil(normalizedTotal / limit);
        const data = Array<OptionsSelect>();
        for (let i = 0; i < totalPage; i++) {

            data.push({
                    id:(i + 1).toString().padStart(2, "0"),
                    value: (limit.toString() + "/" + ((i) * limit).toString()).padStart(2, "0"),
                    text:(i+1).toString().padStart(2, "0")
                }
            );
        }
        setResult(Array.from(new Set(data)) );
    },[limit, total]);

    return result;

}

export default usePagination;
