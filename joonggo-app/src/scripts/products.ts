import {SearchParam} from "@/types/SearchParam";
import {Product} from "@/types/Product";
import {Category} from "@/types/Category";

export function search(searchParam: SearchParam | null): Product[] {
    // TODO search & filter API
    return [
        {id: "v1", name: "Samsung TV 2023 v1", price: 2400000}
        , {id: "v2", name: "Samsung TV 2023 v2", price: 2543000}
        , {id: "v3", name: "Samsung TV 2023 v3", price: 2670000}
        , {id: "v4", name: "Samsung TV 2023 v4", price: 2210000}
    ]
}

export function getCategory() {
    return [new Category("elect", "가전/전자제품", null, [
        new Category("TV", "텔레비전", "elect", [
            new Category("samsung", "삼성", "TV", []),
            new Category("lg", "LG", "TV", [])])
    ]), new Category("clothes", "의류", null, [
        new Category("female", "여성의류", "clothes", [
            new Category("brand", "명품의류", "female", [])])
    ])];
}
