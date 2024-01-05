import Link from "next/link";
import CategoryLevel from "@/app/products/[[...category]]/category-level";

export const dynamicParams = false; // Dynamic segments not included in generateStaticParams will return a 404.

export async function generateStaticParams() {
    return [{category: ["elect", "TV"]}, {category: ["elect", "TV", "samsung"]}, {category: ["elect"]}];

}

export default function Page(params: { params: { category: string[] } }) {
    const category = params.params.category;
    const url = "/products";
    return (
        <CategoryLevel category={category} currentPath={url}/>
    )
}