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
              <b>Tawhid (South Korea)</b>
              <br />
              <br />
              <b>Tawhid, don't be cowardly.</b>
            </p>
            <table>
              <tr>
                <td>
                  <li> Machine learning and Deep learning </li>
                  <li> App development </li>
                  <li> Blockchain</li>
                </td>
                <td></td>
              </tr>
            </table>
            <br />
            {/* <Links /> */}
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
