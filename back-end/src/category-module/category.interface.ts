import { UUID } from "crypto";

export default interface Category {
    id: UUID;
    name: string;
    slug: string;
    parentCategory?: Category;
}