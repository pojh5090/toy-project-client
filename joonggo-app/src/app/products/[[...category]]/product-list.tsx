"use client";

import {useSearchParams} from "next/navigation";
import ProductFilter from "@/app/products/[[...category]]/product-filter";
import {useEffect, useState} from "react";
import {Product, search, SearchParam} from "@/app/products/[[...category]]/product";

export default function ProductList(param: { category: string[] }) {
    const {category} = param;
    const currentCategory = !category ? "" : category.toString();

    const queryParam = useSearchParams();
    const searchValue = (queryParam.get("searchValue") as string) || "";

    const [productList, setProductList] = useState<Product[]>([]);
    const [searchParam, setSearchParam] = useState<SearchParam>(new SearchParam(searchValue));

    useEffect(() => {
        const fetchProduct = async () => {
            setProductList(search(searchParam));
        };
        fetchProduct();
    }, [searchParam])


    return (<>
        <ProductFilter searchParam={searchParam} category={currentCategory}/>
        {productList.length > 0 &&
            productList.map(product => (<div key={product.id}>{product.name}</div>))}
    </>)
}
