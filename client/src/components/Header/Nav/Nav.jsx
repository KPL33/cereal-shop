import { Link } from "react-router-dom";
import { clearAuthenticated } from "../../../../../utils/auth.js";
import useAppContext from "../../../context/useAppContext.jsx";
import Hamburger from "hamburger-react";
import "./nav.css";

const Nav = () => {
  const { loggedIn, setLoggedIn, navOpen, setNavOpen, setSignoutClicked } =
    useAppContext();

  const handleSignOut = () => {
    clearAuthenticated();
    setLoggedIn(false);
    setSignoutClicked(true);
    setNavOpen(false);

    // Delay resetting signOutClicked after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      setSignoutClicked(false);
    }, 6000); // Adjust the delay time (in milliseconds) as needed
  };

  return (
    <div className={`sidebar ${navOpen ? "open" : ""}`}>
      <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
        <Hamburger toggled={navOpen} toggle={setNavOpen} />
      </div>
      <nav className={`sidebar-nav ${navOpen ? "open" : ""}`}>
        {/* Navigation Links */}
        <Link to="/" className="nav-link" onClick={() => setNavOpen(false)}>
          Products
        </Link>
        <Link
          to="/about"
          className="nav-link"
          onClick={() => setNavOpen(false)}
        >
          About Us
        </Link>
        {/* Conditional Links based on loggedIn state */}
        <Link
          to="/login"
          className="nav-link"
          style={{ display: loggedIn ? "none" : "block" }}
          onClick={() => setNavOpen(false)}
        >
          Sign-Up/Log-In
        </Link>
        {/* Display only when logged in */}
        <Link
          to="/cart"
          className="nav-link"
          style={{ display: loggedIn ? "block" : "none" }}
          onClick={() => setNavOpen(false)}
        >
          My Cart
        </Link>
        <Link
          to="/cart"
          className="nav-link"
          style={{ display: loggedIn ? "block" : "none" }}
          onClick={() => setNavOpen(false)}
        >
          My Past Orders
        </Link>
        <Link
          to="/contact"
          className="nav-link"
          onClick={() => setNavOpen(false)}
        >
          Contact Us
        </Link>
        {/* Sign Out Link */}
        <Link
          to="/"
          className="nav-link"
          style={{ display: loggedIn ? "block" : "none" }}
          onClick={handleSignOut}
        >
          Sign Out
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
