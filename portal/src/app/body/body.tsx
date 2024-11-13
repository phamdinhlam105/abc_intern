import Article from "./article-page/article"
import Header from "./header"

export default function Body() {
    return (
        <div className="sm:ml-64">
            <Header title="Bài viết"/>
            <div className="p-3">
                <Article/>
            </div>
        </div>
    )
}