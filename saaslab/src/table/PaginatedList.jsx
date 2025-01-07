import React, { useState } from "react";
import data from "../frontend-assignment.json";
import { Table } from "./Table";
const PaginatedList = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Table data={currentData} />
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          Previous
        </button>
        {[...Array(totalPages)?.keys()].map((num) => (
          <button
            key={num}
            onClick={() => goToPage(num + 1)}
            style={{
              fontWeight: currentPage === num + 1 ? "bold" : "normal",
            }}
          >
            {num + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedList;
