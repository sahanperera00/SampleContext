import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function EditUser({ setShowEditUser, id }) {
  const { getUserById, editUser, userList } = useContext(UserContext);
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: userId,
      name,
      email,
      phoneNumber,
      borrowedBooks,
    };
    editUser(id, user);
    setShowEditUser(false);
  };

  useEffect(() => {
    const user = getUserById(id);
    setUserId(user.id);
    setName(user.name);
    setEmail(user.email);
    setPhoneNumber(user.phoneNumber);
    setBorrowedBooks(user.borrowedBooks);
  }, [id]);
  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label for="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label for="phoneNumber">Phone Number:</label>
        <br />
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          defaultValue={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
