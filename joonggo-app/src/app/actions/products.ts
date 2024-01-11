import {SearchParam} from "@/app/types/SearchParam";
import {Product} from "@/app/types/Product";
import {Category} from "@/app/types/Category";

export function search(searchParam: SearchParam | null): Product[] {
    // TODO search & filter API
    return [
        {id: "v1", name: "Samsung TV 2023 v1", price: 2400000}
        , {id: "v2", name: "Samsung TV 2023 v2", price: 2543000}
        , {id: "v3", name: "Samsung TV 2023 v3", price: 2670000}
        , {id: "v4", name: "Samsung TV 2023 v4", price: 2210000}
    ]
}