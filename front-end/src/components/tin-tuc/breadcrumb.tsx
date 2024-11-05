
export default function Breadcrumb({category}: {category:any}){
    const path = (category: any): string => {
        if (category.parent)
            return path(category.parent) + " > " + category.name;
        else
            return "Trang chủ > " + category.name;
    }   
    console.log(category)
    return (
        <p className="uppercase md:text-lg text-sm">{path(category)}</p>
    )
}   