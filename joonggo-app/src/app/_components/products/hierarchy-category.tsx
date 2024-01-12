import {Category} from "@/types/Category";
import Link from "next/link";
import React from "react";

export default function HierarchyCategory(param: { currentPath: string, categories: Category[] }) {
    let url = param.currentPath + "/";
    return <ul>
        {param.categories.map((category) => {
            return (<li key={category.id}>
                    <Link href={url + category.id + "/"}>{category.name}</Link>
                    {
                        category.subCategoryList && category.subCategoryList.length > 0
                        && (<HierarchyCategory currentPath={url+category.id} categories={category.subCategoryList}/>)
                    }
                </li>
            );
        })}
    </ul>
}