import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export default function Auth({ children }) {
  const location = useLocation();
  console.log(location);
  const { isLoggedIn } = useUser(); // Get isLoggedIn from UserContext

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};
