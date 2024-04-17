import "./header.css";
import atgLogo from "../../../src/assets/atg_logo.svg";

import NavBar from "./NavBar/NavBar.jsx"

const Header = () => {
  return (
    <header className="header">
      <img id="logo" src={atgLogo}></img>
      <div className="title-container">
        <h1 className="company-title">Against The Grains</h1>
        <h3 className="subtitle">
          The best grain-free cereal ever. P<span>eriod.</span>
        </h3>
      </div>
      <div id="navbar">
        <NavBar />
      </div>
    </header>
  );
};
export default Header;
