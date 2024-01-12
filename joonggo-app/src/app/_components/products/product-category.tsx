import React from "react";
import HierarchyCategory from "@/app/_components/products/hierarchy-category";
import {getCategory} from "@/scripts/products";

export default function ProductCategory() {
    const categories = getCategory();
    const productUrlPrefix = "/products";
    let url = productUrlPrefix + "/";
    return <div>
        <HierarchyCategory currentPath={url} categories={categories}/>
    </div>
}
