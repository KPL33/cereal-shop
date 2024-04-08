import "./header.css";

import NavBar from "./NavBar/NavBar.jsx"

const Header = () => {
  return (
    <header className="header">
      <h1>header</h1>

      <div id="navbar">
        <NavBar />
      </div>
    </header>
  );
};
export default Header;
