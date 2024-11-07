import { UUID } from "crypto";
import Category from "src/category-module/category.interface";
import Image from "src/image-module/image.interface";


export default interface Article {
    id: UUID;
    title: string;
    content: string;
    thumbnail: string;
    describe: string;
    createDate: string;
    category: Category;
}