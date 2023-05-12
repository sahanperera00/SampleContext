import { useContext } from "react";
import Navbar from "../components/Navbar";
import { BookContext } from "../context/BookContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { bookList } = useContext(BookContext);

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <h1>Library</h1>
        </div>
        <h2>Books</h2>
        <Link to="/book">More details</Link>
        <table>
          <thead></thead>
          <tbody>
            {bookList.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Users</h2>
        <Link to="/user">More details</Link>
        <table>
          <thead></thead>
          <tbody>
            {/* {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
