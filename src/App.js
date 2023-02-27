import AwardGrid from "./components/AwardGrid";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ maxWidth: "1050px" }}>
          {/* Put LOGO */}
          <img src="logo.png" className="App-logo" alt="logo" />
          {/* add margin for grid */}
          <div style={{ marginLeft: "4vw", marginRight: "4vw" }}>
            <AwardGrid />
          </div>
          {/* Put QRCODE Here */}
          <img src="qrcode.png" alt="qrcode" style={{ maxWidth: "30%" }} />
          {/* Put copyright */}
          <br />
          <img
            src="copyright.png"
            alt="copyright"
            style={{ maxWidth: "30%" }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
