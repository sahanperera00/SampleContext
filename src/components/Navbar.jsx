import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "3rem",
        }}
      >
        <Link to="/">
          <li
            style={{
              cursor: "pointer",
            }}
          >
            Home
          </li>
        </Link>
        <Link to="/book">
          <li
            style={{
              cursor: "pointer",
            }}
          >
            Book
          </li>
        </Link>
        <Link to="/user">
          <li
            style={{
              cursor: "pointer",
            }}
          >
            User
          </li>
        </Link>
      </ul>
    </div>
  );
}
