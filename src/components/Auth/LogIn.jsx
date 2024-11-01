import { GoogleLogo } from "../../assets/googleLogo";
import { GitHubLogo } from "../../assets/gitHubLogo";
import { TwitterLogo } from "../../assets/twitterLogo";
import UserAgreement from "./UserAgreement";

export default function LogIn() {
  const handleContinueWith = () => {};
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
                onClick={handleContinueWith}
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
              <div
                aria-disabled="false"
                role="button"
                tabIndex={0}
                className="continue-with-btn"
                onClick={handleContinueWith}
              >
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <GitHubLogo
                    style={{
                      width: "14px",
                      height: "14px",
                      marginRight: "6px",
                    }}
                  />
                  Continue with GitHub
                </div>
              </div>
              <div
                aria-disabled="false"
                role="button"
                tabIndex={0}
                className="continue-with-btn"
                onClick={handleContinueWith}
              >
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TwitterLogo
                    style={{
                      width: "14px",
                      height: "14px",
                      marginRight: "6px",
                    }}
                  />
                  Continue with Twitter
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
            <form className="auth__form">
              <label className="auth__label">Email</label>
              <div className="focusable-within auth__email-input_wrapper">
                <input
                  placeholder="Enter your email address..."
                  autoComplete="username"
                  type="email"
                  aria-label="Enter your email address..."
                  className="auth__input"
                ></input>
              </div>
              <div
                style={{
                  color: "rgb(172, 171, 169)",
                  fontSize: "12px",
                  lineHeight: "16px",
                  marginTop: "6px",
                  marginBottom: "18px",
                  textAlign: "left",
                  display: "flex",
                }}
              >
                Use an organization email to easily collaborate with teammates
              </div>
              <div className="focusable-within auth__pwd-input_wrapper">
                <input
                  autoComplete="current-password"
                  type="password"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="auth__input"
                ></input>
              </div>
              <div
                aria-disabled="false"
                role="button"
                tabIndex={0}
                className="continue-btn"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  Continue
                </div>
              </div>
            </form>
          </div>
        </div>
        <UserAgreement />
      </div>
    </div>
  );
}
