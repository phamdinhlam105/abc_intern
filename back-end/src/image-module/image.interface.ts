import IArticle from "src/article-module/article.interface";

export default interface IImage {
    id: string;
    name: string;
    article: IArticle;
    describe: string;
    url: string;
    createDate:string;
}