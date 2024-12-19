import ICategory from "src/category-module/category.interface";

export default interface IArticle {
    id: string;
    title: string;
    content: string;
    thumbnail: string;
    describe: string;
    createDate: string;
    category: ICategory;
}