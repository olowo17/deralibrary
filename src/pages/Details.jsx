import React from "react";
import { useContext } from "react";
import { BooksContext } from "../BookContext/BookContext";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { Link } from "react-router-dom";
const Details = () => {
  const { books } = useContext(BooksContext);
  const { id } = useParams();
  const book = books.find((book) => book.id === id);
  return (
    <section className=" bg-slate-400 ">
      <button className="bg-green-800 text-white rounded-md px-2 py-2 mx-4 my-2">
        <Link to={"/"}>Go back</Link>
      </button>
      <div className={`${styles.details} text-center p-4 font-mono flex`}>
        <div className="  bg-white max-w-lg shadow-md rounded-md mx-auto">
          <div className="p-4 ">
            <p className=" text-4xl mt-4" style={{ color: `${book.color}` }}>
              {book.title}
            </p>
            <p className="text-black mt-8 mb-2"> {book.description}</p>
            <div className="text-xl my-8 space-y-4">
              <p className="" style={{ color: `${book.color}` }}>
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
