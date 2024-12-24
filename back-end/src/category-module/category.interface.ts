
export default interface ICategory {
    id: string;
    name: string;
    position: "LEFT" | "MAIN" | "RIGHT";
    slug: string;
    createDate: string;
    status: "visible" | "deleted";
    parentCategory?: ICategory;
}