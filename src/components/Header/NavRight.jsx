function NavRight({ profilePictureUrl, isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <div className="navbar-right">
        <ul className="navbar__nav-list">
          <li className="navbar__nav-item">
            <a tabIndex="0" className="navbar__nav-btn" href="/">
              <div className="navbar__nav-label">Console</div>
            </a>
          </li>
        </ul>
        <div className="navbar-right__divider"></div>
        <ul className="navbar__nav-list">
          <li className="navbar__nav-item">
            <a tabIndex="0" className="navbar__account-btn" href="/">
              <img
                className="navbar__account-img"
                src={profilePictureUrl}
              ></img>
            </a>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="navbar-right">
      <ul className="navbar__nav-list">
        <li className="navbar__nav-item">
          <a tabIndex="0" className="navbar__nav-btn" href="/">
            <div className="navbar__nav-label">Console</div>
          </a>
        </li>
      </ul>
      <div className="navbar-right__divider"></div>
      <ul className="navbar__nav-list">
        <li className="navbar__nav-item">
          <a tabIndex="0" className="navbar__nav-btn" href="/auth/login">
            <div className="navbar__nav-label">Log in</div>
          </a>
        </li>
        <li className="navbar__signup-item">
          <a tabIndex="0" className="navbar__signup-btn" href="/auth/signup">
            Start free trial
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavRight;
