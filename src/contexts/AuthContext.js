import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [id, setId] = useState(false);

  const handleAuth = (s) => {
    setAuth(s);
  };
  const handleState = (id) => {
    setId(id);
  };
  return (
    <AuthContext.Provider value={{ auth, handleAuth, id, handleState }}>
      {children}
    </AuthContext.Provider>
  );
};
