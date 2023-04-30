import React, { useState, useContext } from "react";
import { BooksContext } from "../BookContext/BookContext";
import { useNavigate } from "react-router-dom";
import Search from "../utilities/Search";

const BookTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { books } = useContext(BooksContext);
  const navigate = useNavigate();

  const onClickHandle = (id) => {
    navigate(`/books/${id}`);
  };

  const searchedBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedBooks.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(searchedBooks.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="">
      <div className="flex justify-center my-2 mx-auto items-center">
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

      <div className="">
        <table className="w-full px-6 mx-auto table-fixed ">
          <thead className="bg-teal-800 text-white">
            <tr className="text-2xl py-2 ">
              <th>Title</th>
              <th>Author</th>
              <th>Publication Date</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((book) => (
              <tr
                key={book.id}
                className="odd:bg-slate-200 even:bg-slate-100 p-2 text-xl text-center pl-4 cursor-pointer"
                onClick={() => onClickHandle(book.id)}
              >
                <td >{book.title}</td>
                <td >{book.author}</td>
                <td >{book.publication_date}</td>
                <td >{book.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`mx-2 text-xl my-4 font-medium ${
                currentPage === number ? "text-teal-800" : "text-gray-500"
              }`}
            >
              {`page ${number}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookTable;
