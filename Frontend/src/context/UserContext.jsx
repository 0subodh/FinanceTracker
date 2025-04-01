import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchTransactions } from "../helper/axiosHelper";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const [show, setShow] = useState(false);
  const toggleModal = (value) => setShow(value);

  const getTransactions = async () => {
    // call axios helper to call api
    const response = await fetchTransactions();
    console.log(response);
    // receive data and mount to the transaction by setTransactions setter function
    response.status === "success" && setTransactions(response.data);
  };

  // Initialize user as null (not logged in)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for a token in local storage on initial render
    const token = localStorage.getItem("token");
    if (token) {
      // If a token exists, assume the user is logged in
      setIsLoggedIn(true);
      // You might want to fetch user data here based on the token
      // and update the 'user' state accordingly.
      // Example:
      // fetchUserData(token).then(userData => setUser(userData));
    }
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        login,
        logout,
        transactions,
        getTransactions,
        toggleModal,
        show,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUser = () => useContext(UserContext);
