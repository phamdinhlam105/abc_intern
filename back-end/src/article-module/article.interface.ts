import Category from "src/category-module/category.interface";

export default interface Article {
    id: string;
    title: string;
    content: string;
    thumbnail: string;
    describe: string;
    createDate: string;
    category: Category;
}