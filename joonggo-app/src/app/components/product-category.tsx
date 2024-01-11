import {Category} from "@/app/types/Category";
import React from "react";
import HierarchyCategory from "@/app/components/hierarchy-category";
import {getCategory} from "@/app/actions/products";

export default function ProductCategory() {
    const categories = getCategory();
    const productUrlPrefix = "/products";
    let url = productUrlPrefix + "/";
    return <div>
        <HierarchyCategory currentPath={url} categories={categories}/>
    </div>
}
