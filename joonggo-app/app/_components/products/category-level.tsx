import Link from "next/link";

export default function CategoryLevel(param: {currentPath: string, category:string[]}) {
    const {currentPath, category} = param;
    let url = currentPath + "/";
    return (
        <div>
            {   (category && category.length > 0) &&
                category.map((catg, index) => {
                    url += catg + "/";
                    return (
                        <span key={index}>
                            <Link href={url}>{catg}</Link>
                            {index + 1 < category.length && <span> &gt; </span>}
                        </span>
                    )
                })}
        </div>
    )
}