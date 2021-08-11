import logo from "./logo.svg";
import "./App.css";
import Links from "./blog/links";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div className="App-body">
            <p>
              <b>나의 다차원 공간 - My Multidimensional Space</b>
              <br />
              <b>나와 나의 가족들의 행복을 위해.!</b>
            </p>
            <table>
              <tr>
                <td>
                  <li> 머신러닝과 딥러닝 공간.</li>
                  <li> 앱 개발</li>
                  <li> 블록체인</li>
                </td>
                <td></td>
              </tr>
            </table>
            <br />
            <Links />
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
