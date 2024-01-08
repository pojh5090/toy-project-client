import {SearchParam} from "@/app/products/[[...category]]/products";

export default function ProductFilter(param: { searchParam: SearchParam, category: string }) {
    return (
        <>
            <p>검색어: {param.searchParam.searchValue}</p>
            <p>카테고리: {param.category}</p>
        </>
    )
}