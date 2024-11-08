import Article from "src/article-module/article.interface";

export default interface Image {
    id: string;
    article: Article;
    describe: string;
    url: string;
    createDate:string;
}