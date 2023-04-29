import { createContext, useState } from "react";
import booksData from "../BookCollection/bookData.json";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState(booksData.books);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
}