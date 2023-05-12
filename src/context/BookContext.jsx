import { createContext, useState } from "react";
import { books } from "../data/Book";

export const BookContext = createContext(null);

export const BookContextProvider = ({ children }) => {
  const [bookList, setBookList] = useState(books);

  const getBookById = (id) => {
    return bookList.find((book) => book.id === id);
  };
  
  const addBook = (book) => {
    setBookList([...bookList, book]);
  };

  const removeBook = (id) => {
    setBookList(bookList.filter((book) => book.id !== id));
  };

  const editBook = (id, book) => {
    setBookList(bookList.map((item) => (item.id === id ? book : item)));
  };

  const value = {
    bookList,
    getBookById,
    addBook,
    removeBook,
    editBook,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export default BookContextProvider;