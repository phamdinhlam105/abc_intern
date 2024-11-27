import { Checkbox } from "../ui/checkbox"
import { IFileProps } from "./model/file-model"

export default function ImageFile({ file, handleCheckChange }: {
    file: IFileProps,
    handleCheckChange: (file: IFileProps, isCheck: boolean) => void
}) {

    return <div className='rounded-lg shadow-sm h-32 flex items-end border border-2 relative'
        style={
            {
                backgroundImage: `url(${file.filePath})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }
        }
    >
        <Checkbox
            aria-checked="false"
            value="on"
            className=" h-4 w-4 absolute right-1 top-1 z-40"
            onCheckedChange={(checked) => {
                const isChecked = checked === true;
                handleCheckChange(file, isChecked);
            }}
        >

        </Checkbox>
        <div className='bg-accent h-1/3 w-full rounded-b-md px-2'>
            <p className='truncate text-sm'>{file.fileName}</p>
            <p className='truncate text-sm text-secondary'>{(file.size / 1024).toFixed(2)} KB</p>
        </div>
    </div>
}