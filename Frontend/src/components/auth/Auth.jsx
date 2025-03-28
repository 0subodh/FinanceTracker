import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export default function Auth({ children }) {
  const { isLoggedIn } = useUser(); // Get isLoggedIn from UserContext

  return isLoggedIn ? children : <Navigate to="/" replace />;
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};
