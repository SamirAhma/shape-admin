import { useSelector } from "react-redux";
import { Navigate, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let location = useLocation();

  //   const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  //   if (loading) {
  //     return <p>Checking authenticaton..</p>;
  //   }

  if (!admin) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
