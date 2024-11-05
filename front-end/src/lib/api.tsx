

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

export const fetchGalleryByArticle = async (id: string) => {
    const res = await fetch('');
    if (!res.ok)
        throw new Error('Get data failed');
    return res.json();
}

export const fetchArticleByCategory = async (id: string) => {
    const res = await fetch('');
    if (!res.ok)
        throw new Error('Get data failed');
    return res.json();
}