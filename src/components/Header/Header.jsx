import "./Header.jsx.css";
import { useState, useEffect } from "react";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "header_isScrolled" : ""}`}>
      <a className="header__logo" href="/">
        <img src="https://placehold.co/91x26"></img>
      </a>
      <nav className="header__navbar">
        <NavLeft />
        <NavRight
          profilePictureUrl={"https://placehold.co/30x30"}
          isLoggedIn={false}
        />
      </nav>
    </header>
  );
}

export default Header;
