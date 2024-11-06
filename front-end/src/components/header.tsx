import Link from "next/link";

export default function Header() {
    return (
        <nav className="bg-white border-b border-gray-300 dark:bg-gray-900 px-40 mb-10 pt-3 w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4 w-full">
                <div className="hidden w-full md:block " id="navbar-default">
                    <ul className="font-medium flex flex-col md:flex-row justify-between space-y-1 md:space-y-0 w-full">
                        <li>
                            <Link href="/trang-chu" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
                                    Trang chủ
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700">
                                Tin tức - sự kiện
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700">
                                Kế hoạch giáo dục
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700">
                                Hoạt động
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700">
                                Liên kết
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700">
                                Tài nguyên
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700">
                                Liên hệ
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
