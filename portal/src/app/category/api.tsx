
const API_URL = "http://localhost:3000/category";

export const getCategories = async () => {
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

export const deleteCategory = async (category: Category) => {
    const updatedCategory = { ...category, status: "deleted" };
    try {
        const response = await fetch(`${API_URL}/${category.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCategory),
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

export const newCategory = async (category: {
    name: string,
    slug: string,
    status: 'visible' | 'deleted',
    position: "LEFT" | "MAIN" | "RIGHT",
    parentId: string | null
}) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category),
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