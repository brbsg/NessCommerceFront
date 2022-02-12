import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const persistedToken = JSON.parse(localStorage.getItem("auth"));
  const [token, setToken] = useState(persistedToken);
  const [clientName, setClientName] = useState(null);

  function login(token) {
    setToken(token);
    localStorage.setItem("auth", JSON.stringify(token));
  }


  return (
    <AuthContext.Provider value={{ clientName, setClientName, login, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
