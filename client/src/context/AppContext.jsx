import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [searchValid, setSearchValid] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [quantity, setQuantity] = useState(1);
    // atc="add to cart"
    const [atcClicked, setAtcClicked] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [goBackVisable, setGoBackVisable] = useState(false);
    const [atcButtonClickable, setAtcButtonClickable] = useState(true);
    const [navOpen, setNavOpen] = useState(false);
    const [error, setError] = useState("");
    
    return (
        <AppContext.Provider
            value={{
                email,
                setEmail,
                password,
                setPassword,
                searchValid,
                setSearchValid,
                selectedOption,
                setSelectedOption,
                quantity,
                setQuantity,
                atcClicked,
                setAtcClicked,
                goBackVisable,
                setGoBackVisable,
                atcButtonClickable,
                setAtcButtonClickable,
                error,
                setError,
                navOpen, setNavOpen,
                loggedIn, setLoggedIn,
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
