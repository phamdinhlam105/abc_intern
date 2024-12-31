interface Category {
    id: string;
    name: string;
    position: "LEFT" | "MAIN" | "RIGHT";
    status: 'visible' | 'deleted';
    slug: string;
    parentCategory?: Category | null;
}