
export default function ArticleTitle(article :{
    title:string,
    thumbnail:string,
    category?:any
}){
    const path = (category:any):string => {
        if(category.parent)
            return path(category.parent) + " > " + category.name;
        else
            return "Trang chủ > " + category.name;
    }
    return (
        <div className="w-full md:h-96 h-64 md:px-30 flex items-end justify-center" style={{
            backgroundImage : `url(${article.thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition:'center'
        }}>
            <div className="md:w-2/3 w-3/4 translate-y-1/3 bg-secondary text-white md:py-14 md:px-20 px-3 py-3">
                <p className="uppercase md:text-lg text-sm">{path(article.category)}</p>
                <h2 className="text-lg font-bold my-5">{article.title}</h2>
                <p>Tải file đính kèm</p>
            </div>
        </div>
    )
}