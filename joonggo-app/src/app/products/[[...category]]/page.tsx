import CategoryLevel from "@/app/products/[[...category]]/_components/category-level";
import ProductList from "@/app/products/[[...category]]/_components/product-list";
import {getCategory} from "@/app/actions/products";
import {Category} from "@/app/types/Category";

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
