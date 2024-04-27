import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Moved from the Login component
  // atc="add to cart"
  const [atcClicked, setAtcClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loggedIn, setLoggedIn] = useState(false);
  const [signoutClicked, setSignoutClicked] = useState(false);
  const [goBackVisable, setGoBackVisable] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if the user is authenticated when the component mounts
    const isAuthenticated = localStorage.getItem("authenticated") === "true";
    // Update loggedIn state based on authentication status
    setLoggedIn(isAuthenticated);
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  return (
    <AppContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        showPassword, // Expose showPassword state to components
        setShowPassword, // Expose setShowPassword function to components
        atcClicked,
        setAtcClicked,
        selectedOption,
        setSelectedOption,
        quantity,
        setQuantity,
        goBackVisable,
        setGoBackVisable,
        error,
        setError,
        navOpen,
        setNavOpen,
        loggedIn,
        setLoggedIn,
        signoutClicked,
        setSignoutClicked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProvider, AppContext };
