import {Category} from "@/app/types/Category";
import Link from "next/link";
import React from "react";

function getCategory() {
    // return [{category: ["elect", "TV"]}, {category: ["elect", "TV", "samsung"]}, {category: ["elect"]}, {category: [""]}];
    return [new Category("elect", "가전/전자제품", null, [
        new Category("TV", "텔레비전", "elect", [
            new Category("samsung", "삼성", "TV", []),
            new Category("lg", "LG", "TV", [])])
    ]), new Category("clothes", "의류", null, [
            new Category("female", "여성의류", "clothes", [
                new Category("brand", "명품의류", "female", [])])
    ])];
}

export default function ProductCategory() {
    const categories = getCategory();
    const productUrlPrefix = "/products";
    let url = productUrlPrefix + "/";
    return <div>
        {nestedCategory(url, categories)}
    </div>
}

function nestedCategory(currentPath: string, categories: Category[]) {
    let url = currentPath + "/";
    return <ul>
        {categories.map((category) => {
            return (<li key={category.id}>
                    <Link href={url + category.id + "/"}>{category.name}</Link>
                    {
                        category.subCategoryList && category.subCategoryList.length > 0
                        && nestedCategory(url + category.id, category.subCategoryList)
                    }
                </li>
            );
        })}
    </ul>
}