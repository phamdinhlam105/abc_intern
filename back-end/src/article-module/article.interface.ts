import ICategory from "src/category-module/category.interface";

export default interface IArticle {
    id: string;
    title: string;
    author: string;
    content: string;
    thumbnail: string;
    describe: string;
    status: 'published' | 'draft' | 'deleted';
    createDate: string;
    category: ICategory;
}