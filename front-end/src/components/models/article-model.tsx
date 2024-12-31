
export interface Article {
    id: string;
    title: string;
    author: string;
    content: string;
    thumbnail: string;
    describe: string;
    status: 'published' | 'draft' | 'deleted';
    createDate: string;
    category?: Category;
}