
export default function ActionDropDown({ active, actionClick }: { active: boolean, actionClick: Function }) {

    return (
        <span className={`${active ? "" : "hidden"} w-60 p-1  h-10 text-gray-400 font-normal borderLine rounded-md right-0 absolute z-20 flex items-center -translate-x-8 translate-y-11 bg-white shadow-md `}>
            <button
                onClick={()=>{actionClick()}}
                className="z-50 hover:bg-gray-200 h-full flex items-center w-full rounded-sm px-1 cursor-pointer">Xóa các bài đã chọn
            </button>
        </span>
    )
}