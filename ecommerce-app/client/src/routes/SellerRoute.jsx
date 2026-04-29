import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function SellerRoute({ children }) {
  const { user } = useAuth();

  if (user?.role !== "seller")
    return <Navigate to="/" />;

  return children;
}

export default SellerRoute;