import logo from "./logo.svg";
import "./App.css";
import Links from "./blog/links";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          나의 머신러닝과 딥러닝 공간.
          <br />
          My Machine Learning and Deep Learning Space.
        </p>
        <Links />
      </header>
    </div>
  );
}

export default App;
