import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export default function Auth({ children }) {
  // TODO: Implement actual authentication check
  const isLoggedIn = false;
  return isLoggedIn ? children : <Navigate to="/" replace />;
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};
