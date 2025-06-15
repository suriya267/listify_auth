import { Navigate } from "react-router";
import { getAuthToken } from "../utils/localStorage";

const PrivateRoute = ({ children }: any) => {
  const isAuthenticated = getAuthToken();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
