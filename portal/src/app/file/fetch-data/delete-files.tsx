import { IFileProps } from "@/components/file/model/file-model";

export const deleteFile = async (selectedFiles: IFileProps[]) => {
    const formData = new FormData();
    formData.append('files', JSON.stringify(selectedFiles));

    const response = await fetch('/api/deletefile', {
        method: 'DELETE',
        body: formData
    });
    return response.json();
}