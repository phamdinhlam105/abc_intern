
import ImageFile from './image-file';
import { IFileProps } from './model/file-model';

export default function FileList({ files, selectedFiles, setSelectedFiles }: {
    files: IFileProps[],
    selectedFiles: IFileProps[],
    setSelectedFiles: React.Dispatch<React.SetStateAction<IFileProps[]>>
}) {
    const handleCheckChange = (file: IFileProps, isCheck: boolean) => {
        if (isCheck)
            setSelectedFiles((prev) => [...prev, file]);
        else
            setSelectedFiles(selectedFiles.filter(s => s != file));
    }

    return (
        <ul className="list grid md:grid-cols-8 sm:grid-cols-4 p-4 gap-4">
            {files.map(file => <li key={file.id} >
                <ImageFile file={file} handleCheckChange={handleCheckChange} />
            </li>
            )}
        </ul>
    );
}
