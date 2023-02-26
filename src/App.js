import AwardGrid from "./components/AwardGrid";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Put LOGO */}
        <img src="logo.png" className="App-logo" alt="logo" />
        {/* add margin for grid */}
        <div style={{ marginLeft: "4vw", marginRight: "4vw" }}>
          <AwardGrid />
        </div>
        {/* Put copyright */}
        <img src="copyright.png" alt="copyright" style={{ maxWidth: "30%" }} />
      </header>
    </div>
  );
}

export default App;
