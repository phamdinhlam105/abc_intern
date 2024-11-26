export const getFiles = async () => {
    const response = await fetch('/api/getfile');
    const data = await response.json();
    if (data)
        return data;
}