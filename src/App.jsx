import Auth from "./components/Auth/Auth.jsx";
import Header from "./components/Header/Header.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";

function App() {
  return (
    <div style={{"display": "contents"}}>
      <Header />
      <div className="page-content">
        {/* <Welcome /> */}
        <Auth></Auth>
      </div>
    </div>
  );
}

export default App;
