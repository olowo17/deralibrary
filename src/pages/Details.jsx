import React from "react";
import { useContext } from "react";
import { BooksContext } from "../BookContext/BookContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Details = () => {
  const { books } = useContext(BooksContext);
  const { id } = useParams();
  const book = books.find((book) => book.id === id);
  return (
    <section>
      <button className="bg-green-800 text-white rounded-md px-2 py-2 mx-4 my-2">
        <Link to={"/"}>Go back</Link>
      </button>
      <div className="text-center p-4 font-mono flex">
        <div className="  bg-slate-400 max-w-lg shadow-md rounded-md m-auto">
          <div className="p-4 ">
            <p
              className=" text-4xl mt-4 font-bold"
              style={{ color: `${book.color}` }}
            >
              {book.title}
            </p>
            <p className="text-white md:text-xl sm:text-lg m-2">
              {" "}
              {book.description}
            </p>
            <div className="text-xl my-8 space-y-4">
              <p
                className="text-2xl font-semibold"
                style={{ color: `${book.color}` }}
              >
                {book.author}
              </p>
              <p className="">{book.publication_date}</p>
              <p className="font-bold mb-4">Genre:{book.genre}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
