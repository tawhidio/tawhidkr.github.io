import logo from "./logo.svg";
import "./App.css";
import Routes from "./components/Routes";

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
        <a
          className="App-link"
          href="https://tawhidkr.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          [Github] : tawhidkr.github.io
        </a>
        <br />

        <a
          className="App-link"
          href="https://velog.io/@sidcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          [velog] : velog.io/@sidcode
        </a>
        <br />

        <a
          className="App-link"
          href="https://sidcode.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          [medium] : sidcode.medium.com
        </a>
        <Routes />
      </header>
    </div>
  );
}

export default App;
