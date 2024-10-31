import { UUID } from "crypto";
import  Category from "src/category-module/category.interface";
import  Image from "src/image-module/image.interface";


export default interface Article {
    id: UUID;
    idCategory: UUID;
    title: string;
    content: string;
    thumbnail: string;
    createDate: string;
    category: Category; 
    gallery?: Image[];
}