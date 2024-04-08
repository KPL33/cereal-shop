import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [searchValid, setSearchValid] = useState(null);
    // atc="add to cart"
    const [atcClicked, setAtcClicked] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [goBackVisable, setGoBackVisable] = useState(false);
    const [atcButtonClickable, setAtcButtonClickable] = useState(true);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [errorPresent, setErrorPresent] = useState(null);
    
    return (
        <AppContext.Provider
            value={{
                searchValid,
                setSearchValid,
                atcClicked,
                setAtcClicked,
                goBackVisable,
                setGoBackVisable,
                atcButtonClickable,
                setAtcButtonClickable,
                errorPresent,
                setErrorPresent,
                isNavOpen, setIsNavOpen,
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
