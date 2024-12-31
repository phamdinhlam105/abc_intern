

const API_ANNOUCEMENT = "http://localhost:3000/article/getByCategory/12fc3f08-49b2-4879-b75e-866e5f03548f";
const API_EVENT = "http://localhost:3000/article/getByCategory/9588806b-f039-4c55-9de5-0c093a939c14";
const API_GALLERY = "http://localhost:3000/image"
const API_GET_LINK = "http://localhost:3000/article/slug/";
const API_GET_POST = "http://localhost:3000/article/";
const API_GET_POST_BY_CATEGORY = "http://localhost:3000/article/getByCategory/";

export const getAnnoucements = async () => {
    try {
        const response = await fetch(API_ANNOUCEMENT, { method: 'GET' });
        if (!response)
            throw new Error("Network response was not ok");
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export const getEvents = async () => {
    try {
        const response = await fetch(API_EVENT, { method: 'GET' });
        if (!response)
            throw new Error("Network response was not ok");
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export const getPictures = async () => {
    try {
        const response = await fetch(API_GALLERY, { method: 'GET' });
        if (!response)
            throw new Error("Network response was not ok");
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export const getLinkByPostId = async (id: string) => {
    try {
        const response = await fetch(API_GET_LINK + id, { method: 'GET' });
        if (!response)
            throw new Error("Network response was not ok");
        return response.json();
    } catch (error) {
        throw error;
    }
}

export const getPostById = async (id: string) => {
    try {
        const response = await fetch(API_GET_POST + id, { method: 'GET' });
        if (!response)
            throw new Error("Network response was not ok");
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export const getPostByCategory = async (id?: string) => {
    try {
        const response = await fetch(API_GET_POST_BY_CATEGORY + id, { method: 'GET' });
        if (!response)
            throw new Error("Network response was not ok");
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}