import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Home";
import Book from "./pages/Book";
import User from "./pages/User";
import BookDetail from "./pages/BookDetail";
import UserDetail from "./pages/UserDetail";
import BookContextProvider from "./context/BookContext";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <BookContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/user/:id" element={<UserDetail />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </BookContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
