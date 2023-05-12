import { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BookContext";

export default function EditBook({ setShowEditBook, id }) {
  const { getBookById, editBook, bookList } = useContext(BookContext);
  const [bookId, setBookId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [availableCopies, setAvailableCopies] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: bookId,
      title,
      author,
      publicationDate,
      availableCopies,
    };
    editBook(id, book);
    setShowEditBook(false);
  };

  useEffect(() => {
    const book = getBookById(id);
    setBookId(book.id);
    setTitle(book.title);
    setAuthor(book.author);
    setPublicationDate(book.publicationDate);
    setAvailableCopies(book.availableCopies);
  }, [id]);

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <label for="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <label for="author">Author:</label>
        <br />
        <input
          type="text"
          id="author"
          name="author"
          defaultValue={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <br />
        <label for="publicationDate">Publication Date:</label>
        <br />
        <input
          type="text"
          id="publicationDate"
          name="publicationDate"
          defaultValue={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          required
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
