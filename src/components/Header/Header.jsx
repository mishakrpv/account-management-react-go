import "./Header.jsx.css";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img src="https://placehold.co/91x26"></img>
      </a>
      <nav className="header__navbar">
        <NavLeft />
        <NavRight />
      </nav>
    </header>
  );
}

export default Header;
