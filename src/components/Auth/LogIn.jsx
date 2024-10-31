import { GoogleLogo } from "../../assets/googleLogo";
import UserAgreement from "./UserAgreement";

export default function LogIn() {
  const handleLogIn = () => {};
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="auth__m_title">
        <div className="auth__title_label">
          <div>Super</div>
          <div style={{ color: "rgb(172, 171, 169)" }}>
            Log in to your account
          </div>
        </div>
      </div>
      <div className="app_name-login">
        <div
          style={{ display: "flex", width: "100%", flexDirection: "column" }}
        >
          <div>
            <div style={{ width: "100%" }}>
              <div
                aria-disabled="false"
                role="button"
                tabIndex={0}
                className="continue-with-btn"
                onClick={handleLogIn}
              >
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <GoogleLogo
                    style={{
                      width: "14px",
                      height: "14px",
                      display: "block",
                      fill: "inherit",
                      flexShrink: 0,
                      marginRight: "6px",
                    }}
                  />
                  Continue with Google
                </div>
              </div>
            </div>
          </div>
          <div className="horizontal-divider">
            <div
              role="separator"
              style={{
                width: "100%",
                height: "1px",
                visibility: "visible",
                borderBottom: "1px solid rgba(227, 226, 224, 0.5)",
              }}
            ></div>
          </div>
          <div>
            <form className="auth__form"></form>
          </div>
        </div>
        <UserAgreement />
      </div>
    </div>
  );
}
