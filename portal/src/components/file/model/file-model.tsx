import { Article } from "@/components/article/model/article-model";

export interface IFileProps {
    id: string;
    name: string;
    article: Article | null;
    describe: string;
    url: string;
    createDate:string;
}