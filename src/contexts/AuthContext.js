import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [userId, setUserId] = useState(false);
  const [ratedDish, setRatedDish] = useState([]);
  console.log(ratedDish);

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
  return (
    <AuthContext.Provider
      value={{
        auth,
        handleAuth,
        userId,
        handleId,
        ratedDish,
        userRatedDish,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
