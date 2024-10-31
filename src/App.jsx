import Auth from "./components/Auth/Auth.jsx";
import Header from "./components/Header/Header.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div style={{"display": "contents"}}>
      <Header />
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
