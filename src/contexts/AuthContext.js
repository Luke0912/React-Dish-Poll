import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [userId, setUserId] = useState(false);
  const [ratedDish, setRatedDish] = useState([]);
  const [savedData, setSavedData] = useState([]);

  const handleAuth = (s) => {
    setAuth(s);
  };
  const handleId = (id) => {
    setUserId(id);
  };
  const userRatedDish = (obj) => {
    let curr = [...ratedDish, obj];
    setRatedDish(curr);
  };
  const savedUserData = (arr) => {
    let newD = [...savedData, arr];
    setSavedData(newD);
  };
  return (
    <AuthContext.Provider
      value={{
        auth,
        handleAuth,
        userId,
        handleId,
        ratedDish,
        userRatedDish,
        savedData,
        savedUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
