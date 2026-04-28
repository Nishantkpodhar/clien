import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children }) => {
  const { user, token } = useAuth();
  return token && user?.role === 'admin' ? children : <Navigate to="/" replace />;
};

export default AdminRoute;
