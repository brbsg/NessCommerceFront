import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const persistedToken = JSON.parse(
    localStorage.getItem("token-ness-commerce")
  );
  const persistedClientName = JSON.parse(
    localStorage.getItem("client-name-ness-commerce")
  );

  const [token, setToken] = useState(persistedToken);
  const [clientName, setClientName] = useState(persistedClientName);

  function setPersistedData(name, token) {
    setToken(token);
    localStorage.setItem("token-ness-commerce", JSON.stringify(token));

    setClientName(name);
    localStorage.setItem("client-name-ness-commerce", JSON.stringify(name));
  }

  return (
    <AuthContext.Provider
      value={{ clientName, setClientName, setPersistedData, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
