import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const SellerRoute = ({ children }) => {
  const { user, token } = useAuth();
  return token && user?.role === 'seller' ? children : <Navigate to="/" replace />;
};

export default SellerRoute;
