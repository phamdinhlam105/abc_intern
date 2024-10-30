//database

// Category:
// -id uuid
// -name string
// -slug string
// -parentId uuid(nullable)
// -subcategory [Category]
// -posts [Article]

// Article:
// -id uuid
// -idCat uuid
// -title text
// -content text
// -thumbnail
// -gallery: [Image]

//Image:
//-id uuid
//-idArticle uuid
//-url string



export const fetchArticle = async () => {
    const res = await fetch(``);
    if (!res.ok) {
        throw new Error('Failed to fetch news');
    }
    return res.json();
}

export const fetchCategory = async () => {
    const res = await fetch('');
    if (!res.ok)
        throw new Error('Get data failed');
    return res.json();
}

export const fetchGalleryByArticle = async (id: number) => {
    const res = await fetch('');
    if (!res.ok)
        throw new Error('Get data failed');
    return res.json();
}

export const fetchArticleByCategory = async (id: number) => {
    const res = await fetch('');
    if (!res.ok)
        throw new Error('Get data failed');
    return res.json();
}