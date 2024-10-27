function NavRight() {
  return (
    <div className="navbar-right">
      <ul className="navbar__nav-list">
        <li className="navbar__nav-item">
          <a className="navbar__nav-btn">
            <div className="navbar__nav-label">Console</div>
          </a>
        </li>
      </ul>
      <div className="navbar-right__divider"></div>
      <ul className="navbar__nav-list">
        <li className="navbar__nav-item">
          <a className="navbar__nav-btn">
            <div className="navbar__nav-label">Log in</div>
          </a>
        </li>
        <li className="navbar__signup-item">
          <a className="navbar__signup-btn">Start free trial</a>
        </li>
      </ul>
    </div>
  );
}

export default NavRight;
