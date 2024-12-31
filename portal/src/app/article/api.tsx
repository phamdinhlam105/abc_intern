import { Article } from "@/components/article/model/article-model";


const API_URL = "http://localhost:3000/article";

export const getPosts = async () => {
    try {
        const response = await fetch(API_URL, { method: 'GET' });
        if (!response)
            throw new Error("Network response was not ok");
        const result = await response.json();
        return result
    } catch (error) {
        throw error;
    }
}

export const deletedPost = async (post: Article) => {
    const updatedPost = { ...post, status: "deleted" };
    try {
        const response = await fetch(`${API_URL}/${post.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPost),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
}

export const addNewPost = async (post: Article) => {
    const newPost = {
        idCategory: post.category?.id,
        title: post.title,
        author: post.author,
        content: post.content,
        describe: post.describe,
        thumbnail: post.thumbnail,
        status: post.status,
    };
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
}

export const addImageToPost = async (idPost: string, listImagesId: string[]) => {
    try {
        const response = await fetch(`${API_URL}/addImage/${idPost}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(listImagesId),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
}