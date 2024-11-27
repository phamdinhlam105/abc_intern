
import ImageFile from './image-file';
import WordFile from './word-file';
import PresentationFile from './presentation-file';
import { IFileProps } from './model/file-model';

export default function FileList({ files, selectedFiles, setSelectedFiles }: {
    files: IFileProps[],
    selectedFiles: IFileProps[],
    setSelectedFiles: React.Dispatch<React.SetStateAction<IFileProps[]>>
}) {


    const handleCheckChange = (file: IFileProps, isCheck: boolean) => {
        console.log(selectedFiles)
        if (isCheck)
            setSelectedFiles((prev) => [...prev, file]);
        else
            setSelectedFiles(selectedFiles.filter(s => s != file));
    }

    return (
        <ul className="list grid grid-cols-8 p-4 gap-4">
            {files.map((file, idx) => {
                const fileExtension = file.fileName.split('.').pop();
                switch (fileExtension) {
                    case 'jpg':
                    case 'jpeg':
                    case 'png':
                        return <li key={idx} ><ImageFile file={file} handleCheckChange={handleCheckChange} /></li>;
                    case 'pdf':
                        return <li key={idx}><PresentationFile file={file} handleCheckChange={handleCheckChange} /></li>
                    case 'doc':
                    case 'docx':
                        return <li key={idx}><WordFile file={file} handleCheckChange={handleCheckChange} /></li>
                    default:
                        return undefined;
                }
            })}
        </ul>
    );
}
