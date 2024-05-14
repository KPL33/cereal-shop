import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAppContext from "../../context/useAppContext";

const ProtectedRoute = ({ element }) => {
  const { loggedIn } = useAppContext();

  return loggedIn ? element : <Navigate to="/login" replace />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
