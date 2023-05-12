import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { BookContext } from "../context/BookContext";
import AddBook from "../components/AddBook";
import EditBook from "../components/EditBook";

export default function Book() {
  const { bookList, removeBook } = useContext(BookContext);
  const [showAddBook, setShowAddBook] = useState(false);
  const [showEditBook, setShowEditBook] = useState(false);
  const [id, setId] = useState("");

  const handleEdit = (id) => () => {
    setId(id);
    setShowEditBook(true);
  };

  const handleDelete = (id) => () => {
    removeBook(id);
  };

  return (
    <div>
      <Navbar />
      {showAddBook && <AddBook setShowAddBook={setShowAddBook} />}
      {showEditBook && <EditBook id={id} setShowEditBook={setShowEditBook} />}
      <div>
        <button onClick={() => setShowAddBook(!showAddBook)}>Add Book</button>
      </div>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {bookList.map((book) => (
            <div>
              <div
                style={{
                  width: "200px",
                  border: "1px solid black",
                  margin: "10px",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <h3>{book.publicationDate}</h3>
                <h4>Available: {book.availableCopies}</h4>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  <button onClick={handleEdit(book.id)}>Edit</button>
                  <button onClick={handleDelete(book.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
