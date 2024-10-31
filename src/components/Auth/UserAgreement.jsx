export default function UserAgreement() {
  const termsNConditionsLink = "";
  const privacyPolicyLink = "";

  return (
    <div className="privacy_remark">
      <p style={{ marginBottom: "0px" }}>
        Your name and photo are displayed to users who invite you to a workspace
        using your email. By continuing, you acknowledge that you understand and
        agree to the&nbsp;
        <a
          href={termsNConditionsLink}
          rel="noopener noreferrer"
          className="app-link-blue"
          style={{
            display: "inline",
            color: "rgb(172, 171, 169)",
            textDecoration: "none",
            userSelect: "none",
            cursor: "pointer",
          }}
        >
          Terms &amp; Conditions
        </a>
        &nbsp;and&nbsp;
        <a
          href={privacyPolicyLink}
          rel="noopener noreferrer"
          className="app-link-blue"
          style={{
            display: "inline",
            color: "rgb(172, 171, 169)",
            textDecoration: "none",
            userSelect: "none",
            cursor: "pointer",
          }}
        >
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
