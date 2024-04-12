import useAppContext from "../../../context/useAppContext.jsx";

import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import Auth from "../../../utils/auth";
import "./navbar.css";

const NavBar = () => {
  let {
    loggedIn,
    setLoggedIn,
    error,
    setError,
    isNavOpen,
    setIsNavOpen,
  } = useAppContext();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">
        Products
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link
        to="/signup"
        className="nav-link"
        id="sign-log-link"
        style={{ display: loggedIn ? "none" : "block" }}
      >
        Sign-Up/Log-In
      </Link>
      <Link
        to="/signup"
        className="nav-link"
        id="sign-out-link"
        style={{ display: loggedIn ? "block" : "none" }}
        onClick={(setLoggedIn = "false")}
      >
        Sign Out
      </Link>
      <Link
        to="/cart"
        className="nav-link"
        id="cart-link"
        style={{ display: loggedIn ? "block" : "none" }}
      >
        Cart
      </Link>
      <Link
        to="/history"
        className="nav-link"
        id="my-orders-link"
        style={{ display: loggedIn ? "block" : "none" }}
      >
        My Orders
      </Link>
      <Link to="/contact" className="nav-link">
        Contact Us
      </Link>
    </nav>
  );
};

export default NavBar;
