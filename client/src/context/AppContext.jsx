import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // atc="add to cart"
  const [selectedFood, setSelectedFood] = useState(null);
  const [selectedMerch, setSelectedMerch] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loggedIn, setLoggedIn] = useState(false);
  const [signoutClicked, setSignoutClicked] = useState(false);
  const [goBackVisable, setGoBackVisable] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [error, setError] = useState("");
  const [quantityError, setQuantityError] = useState(false);
  const [userId, setUserId] = useState(null); // State to hold userId
  const [cartId, setCartId] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    // Check if the user is authenticated when the component mounts
    const isAuthenticated = localStorage.getItem("authenticated") === "true";
    // Update loggedIn state based on authentication status
    setLoggedIn(isAuthenticated);

    if (isAuthenticated) {
      const storedUserId = localStorage.getItem("userId");
      const storedCartId = localStorage.getItem("cartId");
      setUserId(storedUserId);
      setCartId(storedCartId);
    }
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
        selectedFood,
        setSelectedFood,
        selectedMerch,
        setSelectedMerch,
        quantity,
        setQuantity,
        goBackVisable,
        setGoBackVisable,
        error,
        setError,
        quantityError,
        setQuantityError,
        cartProducts,
        setCartProducts,
        navOpen,
        setNavOpen,
        loggedIn,
        setLoggedIn,
        signoutClicked,
        setSignoutClicked,
        userId,
        cartId,
        editingProfile,
        setEditingProfile,
        profileData,
        setProfileData,
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
