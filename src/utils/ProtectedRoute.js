import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

export const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return <Navigate to={'/'} replace={false} />;
  }
  return children;
};
