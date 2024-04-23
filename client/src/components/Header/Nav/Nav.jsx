import { Link } from "react-router-dom";
import useAppContext from "../../../context/useAppContext.jsx";
import Hamburger from "hamburger-react";
import "./nav.css";

const Nav = () => {
  const { loggedIn, setLoggedIn, navOpen, setNavOpen, setSignoutClicked } = useAppContext();


  return (
    <div className={`sidebar ${navOpen ? "open" : ""}`}>
      <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
        <Hamburger toggled={navOpen} toggle={setNavOpen} />
      </div>
      <nav className={`sidebar-nav ${navOpen ? "open" : ""}`}>
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
        <Link
          to="/login"
          className="nav-link"
          style={{ display: loggedIn ? "none" : "block" }}
          onClick={() => setNavOpen(false)}
        >
          Sign-Up/Log-In
        </Link>
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
        <Link
          to="/"
          className="nav-link"
          style={{ display: loggedIn ? "block" : "none" }}
          onClick={() => {
            setLoggedIn(false);
            setSignoutClicked(true);
            setNavOpen(false);
          }}
        >
          Sign Out
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
