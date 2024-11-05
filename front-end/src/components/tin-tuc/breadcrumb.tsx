
export default function Breadcrumb({ category, title }: { category: any, title: string }) {
    const path = (category: any): string => {
        if (category.parent)
            return path(category.parent) + " > " + category.name;
        else
            return "Trang chủ > " + category.name;
    }
    return (
        <>
            <p className="uppercase md:text-lg text-sm font-light">{path(category)}</p>
            <h2 className="text-2xl my-5">{title}</h2>
        </>
    )
}   