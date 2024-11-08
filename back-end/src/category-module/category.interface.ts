
export default interface ICategory {
    id: string;
    name: string;
    slug: string;
    parentCategory?: ICategory;
}