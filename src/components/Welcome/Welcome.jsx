import "./Welcome.jsx.css";

function Welcome() {
  return (
    <div className="drop-wrap">
      <i className="drop" style={{ "--order": 1 }}>
        🙈
      </i>
      <i className="drop" style={{ "--order": 2 }}>
        🙉
      </i>
      <i className="drop" style={{ "--order": 3 }}>
        🙊
      </i>
    </div>
  );
}

export default Welcome;
