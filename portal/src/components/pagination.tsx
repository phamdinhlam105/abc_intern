"use client"

import FirstPageIcon from "./icons/first-page-icon";
import LastPageIcon from "./icons/last-page-icon";
import NextIcon from "./icons/next-icon";
import PreviousIcon from "./icons/previous-icon";

type PaginationProps = {
  paginationList: object[];
  numberPerPage: number;
  setNumberPerPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Pagination({
  paginationList,
  numberPerPage,
  setNumberPerPage,
  currentPage,
  setCurrentPage
}: PaginationProps) {

  const totalPages = Math.ceil(paginationList.length / numberPerPage);

  const paginate = (list: object[], page: number, itemsPerPage: number) => {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return list.slice(startIndex, endIndex);
  };

  // Chuyển số lượng item mỗi trang
  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = Number(event.target.value);
    setNumberPerPage(newItemsPerPage);
    setCurrentPage(0);
  };

  const handlePageChange = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const range = 2; 
    for (let i = currentPage - range; i <= currentPage + range; i++) {
      pages.push(i);
    }
    return pages.filter(page => page >= 0 && page < totalPages);

  };

  return (
    <div className="mt-5 flex justify-between">
      <div className="flex items-center">
        <select
          id="itemsPerPage"
          value={numberPerPage}
          onChange={handleItemsPerPageChange}
          className="border p-2 rounded-md"
        >
          {[5, 10, 20, 30, 40, 100].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span className="ml-2">/ {paginationList.length} </span>
      </div>

      <div className="flex items-center justify-center mt-4 space-x-2">
        <button
          onClick={() => handlePageChange(0)}
          disabled={currentPage === 0}
          className="h-10 w-10 items-center flex justify-center hover:bg-gray-200 rounded-md disabled:opacity-50 borderLine"
        >
          <FirstPageIcon/>
        </button>

        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
          className="h-10 w-10 items-center flex justify-center hover:bg-gray-200 rounded-md disabled:opacity-50 borderLine"
        >
          <PreviousIcon/>
        </button>

        <div className="mx-4">
          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 mx-1 borderLine rounded-md ${page === currentPage ? "bg-primary text-white":"hover:bg-gray-200"
                }`}
            >
              {page + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className="items-center flex justify-center h-10 w-10 hover:bg-gray-200 rounded-md disabled:opacity-50 borderLine"
        >
          <NextIcon/>
        </button>

        <button
          onClick={() => handlePageChange(totalPages - 1)}
          disabled={currentPage === totalPages - 1}
          className="h-10 w-10 items-center flex justify-center hover:bg-gray-200 rounded-md disabled:opacity-50 borderLine"
        >
          <LastPageIcon/>
        </button>
      </div>
    </div>
  );
}
