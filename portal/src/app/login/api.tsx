

const API_URL = "http://localhost:3000/auth";

export const logIn = async (email: string, password: string) => {
    try {
        const res = await fetch(API_URL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
        if (!res.ok)
            throw new Error("Network response was not ok");
        const result = await res.json();
        return result;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
}