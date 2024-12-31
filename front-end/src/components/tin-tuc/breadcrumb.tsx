
export default function Breadcrumb({ category, title }: { category?: Category, title: string }) {
    const path = (category?: Category): string => {
        if (category?.parentCategory)
            return path(category.parentCategory) + " > " + category.name;
        else
            return "Trang chủ > " + category?.name;
    }
    return (
        <>
            <p className="uppercase md:text-lg text-sm font-light">{path(category)}</p>
            <h2 className="text-2xl my-5">{title}</h2>
        </>
    )
}   