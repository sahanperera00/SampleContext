import { createContext, useState } from "react";
import { users } from "../data/User";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [userList, setUserList] = useState(users);

  const getUserById = (id) => {
    return userList.find((user) => user.id === id);
  };

  const addUser = (user) => {
    setUserList([...userList, user]);
  };

  const removeUser = (id) => {
    setUserList(userList.filter((user) => user.id !== id));
  };

  const editUser = (id, user) => {
    setUserList(userList.map((item) => (item.id === id ? user : item)));
  };

  const value = {
    userList,
    getUserById,
    addUser,
    removeUser,
    editUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
