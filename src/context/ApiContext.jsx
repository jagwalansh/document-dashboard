import { createContext, useState } from "react";

export const ApiContext = createContext();

const demoUsers = {
  "admin@portal.com": { name: "Admin", role: "admin" },
};

const demoDocuments = [
  { id: 1, title: "Doc 1", status: "Pending" },
  { id: 2, title: "Doc 2", status: "Approved" },
];

export const ApiProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === "admin@portal.com" && password === "admin123") {
      setUser(demoUsers[email]);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <ApiContext.Provider value={{ user, login, logout, demoDocuments }}>
      {children}
    </ApiContext.Provider>
  );
};