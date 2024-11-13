import BookIcon from "./icons/book-icon";
import CategoryIcon from "./icons/category-icon";
import DropDownIcon from "./icons/drop-down-icon";
import FolderIcon from "./icons/folder-icon";
import SettingIcon from "./icons/setting-icon";
import Logo from "./logo";

export default function SideBar() {
    return (
        <aside id="sidebar-multi-level-sidebar"
            className="borderLine border-r fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar">
            <Logo/>
            <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <BookIcon />
                            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Bài viết</span>
                            <DropDownIcon />
                        </button>
                        <ul id="dropdown-example" className="hidden py-2 space-y-2">
                            <li>
                                <a href="#"
                                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Tạo bài viết mới
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <CategoryIcon />
                            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Danh mục</span>
                            <DropDownIcon />
                        </button>
                        <ul id="dropdown-example" className="hidden py-2 space-y-2">
                            <li>
                                <a href="#"
                                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Tạo danh mục mới
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FolderIcon />
                            <span className="flex-1 ms-3 whitespace-nowrap">Quản lý tệp</span>
                        </a>
                    </li>
                    <li>
                        <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <SettingIcon />
                            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Cài đặt</span>
                            <DropDownIcon />
                        </button>
                        <ul id="dropdown-example" className="hidden py-2 space-y-2">
                            <li>
                                <a href="#"
                                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Tài khoản
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Giao diện
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    )
}