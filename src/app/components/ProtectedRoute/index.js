import { Navigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS } from "../../constants/commonConstants";

const ProtectedRoute = (props) => {
  const { redirectTo, children } = props;
  const isAuthenticated = localStorage.getItem(LOCAL_STORAGE_KEYS.IS_AUTHENTICATED);

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default ProtectedRoute;
