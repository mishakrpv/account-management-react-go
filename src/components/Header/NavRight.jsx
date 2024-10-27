function NavRight() {
  return (
    <div className="navbar-right">
      <ul className="navbar__nav-list">
        <li className="navbar__nav-item">
          <button type="button">Console</button>
        </li>
      </ul>
      <div className="navbar-right__divider"></div>
      <ul className="navbar__nav-list">
        <li className="navbar__nav-item">
          <a>Log in</a>
        </li>
        <li className="navbar__cta-item">
          <a>Get space truckin free</a>
        </li>
      </ul>
    </div>
  );
}

export default NavRight;
