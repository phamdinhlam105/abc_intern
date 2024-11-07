import { UUID } from "crypto";
import Article from "src/article-module/article.interface";

export default interface Image {
    id: UUID;
    article: Article;
    describe: string;
    url: string;
    createDate:string;
}