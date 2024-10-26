import "./Header.jsx.css";
import DesktopNav from "./DesktopNav";

function Header() {
  return (
    <header className="header">
      <div className="headher__inner">
        <div className="header__logo-wrap"></div>
        <div className="header__desktop-actions">
          <DesktopNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
