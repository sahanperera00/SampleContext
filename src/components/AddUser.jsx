import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function AddUser({setShowAddUser}) {
  const { addUser, userList } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: userList.length + 1,
      name,
      email,
      phoneNumber,
      borrowedBooks: [],
    };
    addUser(user);
    setShowAddUser(false);
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
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
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
