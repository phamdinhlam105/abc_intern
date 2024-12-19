import { Checkbox } from "../ui/checkbox"
import { IFileProps } from "./model/file-model"

export default function WordFile({ file, handleCheckChange }: {
    file: IFileProps,
    handleCheckChange: (file: IFileProps, isCheck: boolean) => void
}) {

    return <div className="rounded-lg shadow-sm h-32 flex items-end border border-2 flex-col justify-between items-center relative">
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
        <div className="rounded-md border border-2 border-orange-700 h-12 w-10 mt-4 relative">

            <div className="absolute w-12 rounded-sm text-center bg-blue-700 left-1/2 -translate-x-1/2 top-1/3">
                <p className="font-bold text-sm text-neutral-50 ">DOC</p>
            </div>
        </div>
        <div className='bg-accent h-1/3 w-full rounded-b-md px-2'>
            <p className='truncate text-sm'>{file.fileName}</p>
            <p className='truncate text-sm text-secondary'>{(file.size / 1024).toFixed(2)} KB</p>
        </div>
    </div>
}