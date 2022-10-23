import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(`/api/auth/login`, inputs);
    setCurrentUser(res.data);
  };
  // const editUser = async ({ username, email, password, img }) => {
  //   const res = await axios.put(`/api/users/${currentUser.id}`, {
  //     username,
  //     email,
  //     password,
  //     img,
  //   });
  //   setCurrentUser(res.data);
  //   console.log(res.data);
  // };

  const logout = async (inputs) => {
    await axios.post(`/api/auth/logout`);
    setCurrentUser(null);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`/api/users/${currentUser.id}`);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, deleteUser }}>
      {children}
    </AuthContext.Provider>
  );
};
