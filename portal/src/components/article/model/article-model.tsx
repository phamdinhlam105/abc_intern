export interface Article {
    id: string,
    title: string,
    category: string,
    createDate: string,
    status: "published" | "deleted" | "draft",
    author: string,
}