import "./Auth.jsx.css";
import LogIn from "./LogIn";

export default function Auth() {
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ width: "100%", height: "80px" }}></div>
      <main className="auth__main">
        <div className="auth__main_inner">
          <section className="auth__section">
            <div style={{ width: "100%", borderRadius: "4px" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: "1260px",
                  margin: "0px auto",
                }}
              >
                <LogIn />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
