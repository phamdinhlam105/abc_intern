import { Article } from "./article-model";

export interface Picture {
    id: string;
    name: string;
    article: Article | null;
    describe: string;
    url: string;
    createDate:string;
}