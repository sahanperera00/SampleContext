import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";
import AddUser from "../components/AddUser";
import EditUser from "../components/EditUser";

export default function User() {
  const { userList, removeUser } = useContext(UserContext);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const [id, setId] = useState("");

  const handleEdit = (id) => () => {
    setId(id);
    setShowEditUser(true);
  };

  const handleDelete = (id) => () => {
    removeUser(id);
  };
  return (<div>
    <Navbar />
    {showAddUser && <AddUser setShowAddUser={setShowAddUser} />}
    {showEditUser && <EditUser id={id} setShowEditUser={setShowEditUser} />}
    <div>
      <button onClick={() => setShowAddUser(!showAddUser)}>Add User</button>
    </div>
    <div className="container">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {userList.map((user) => (
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
              <h1>{user.name}</h1>
              <h2>{user.email}</h2>
              <h3>{user.phoneNumber}</h3>
              <h4>Borrowed books: {user.borrowedBooks.length}</h4>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <button onClick={handleEdit(user.id)}>Edit</button>
                <button onClick={handleDelete(user.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
