import { IFileProps } from "@/components/file/model/file-model";

const API_URL = "http://localhost:3000/image";

export const getImages = async () => {
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

export const deleteImage = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
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
export const addImage = async (image: any) => {
    if (image)
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(image),
            })
            if (!response)
                throw new Error("Network response was not ok");
            const result = await response.json();
            return result
        } catch (error) {
            throw error;
        }
}

export const getImageWithoutArticle = async()=>{
    try {
        const response = await fetch(`${API_URL}/non-article`, {
            method: 'GET'
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