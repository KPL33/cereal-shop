import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import Auth from "../../../utils/auth";
import "./navbar.css";

const NavBar = () => {
    return (
      <nav className="nav">
        <Link to="/" className="nav-link">
          Products
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/signup" className="nav-link">
          Sign-Up/Log-In
        </Link>
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
        <Link to="/history" className="nav-link">
          Past Orders
        </Link>
        <Link to="/contact" className="nav-link">
          Contact Us
        </Link>
      </nav>
    );
};

export default NavBar;