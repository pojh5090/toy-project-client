import CategoryLevel from "@/app/_components/products/category-level";
import ProductList from "@/app/_components/products/product-list";
import {getCategory} from "@/scripts/products";
import {Category} from "@/types/Category";

export const dynamicParams = false; // Dynamic segments not included in generateStaticParams will return a 404.

export async function generateStaticParams() {
    const categories = getCategory();

    return createRoute(categories);
}

function createRoute(categories: Category[]) {
    let routeList: string[][] = [];

    categories.map((category) => routeList.push(...recursiveRoute(category)))

    return routeList;
}


function recursiveRoute(category: Category, currentRoute: string[] = []) {
    let routeList: string[][] = [];

    currentRoute.push(category.id);
    const {subCategoryList} = category;
    if (subCategoryList && subCategoryList.length > 0) {
        subCategoryList.map(sub => routeList.push(...recursiveRoute(sub, currentRoute)));
    }
    routeList.push(currentRoute);
    return routeList;
}

export default function Page(params: { params: { category: string[] } }) {
    const category = params.params.category;
    const url = "/products";
    return (
        <>
            <CategoryLevel category={category} currentPath={url}/>
            <div>
                <ProductList category={category}/>
            </div>
        </>
    )
}
