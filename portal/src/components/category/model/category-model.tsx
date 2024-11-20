interface Category {
    id: string;
    name: string;
    position: "LEFT" | "MAIN" | "RIGHT";
    createDate: string;
    status: "visibled" | "deleted";
}