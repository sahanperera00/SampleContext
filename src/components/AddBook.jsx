import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

export default function AddBook({ setShowAddBook }) {
  const { addBook, bookList } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [availableCopies, setAvailableCopies] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: bookList.length + 1,
      title,
      author,
      publicationDate,
      availableCopies,
    };
    addBook(book);
    setShowAddBook(false);
  };

  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <label for="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
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
          onChange={(e) => setPublicationDate(e.target.value)}
          required
        />
        <br />
        <label for="availableCopies">Available Copies:</label>
        <br />
        <input
          type="text"
          id="availableCopies"
          name="availableCopies"
          onChange={(e) => setAvailableCopies(e.target.value)}
          required
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
