import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(`/api/auth/login`, inputs);
    console.log(res.data);
    setCurrentUser(res.data);
  };
  console.log(currentUser);

  const logout = async (inputs) => {
    await axios.post(`/api/auth/logout`);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
