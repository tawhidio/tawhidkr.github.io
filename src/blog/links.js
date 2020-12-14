import React from "react";
import Routes from "../components/Routes";

function Links() {
  return (
    <div>
      <table>
        <tr>
          <td>
            <a
              className="App-link"
              href="https://github.com/tawhidkr/PyTensor"
              target="_blank"
              rel="noopener noreferrer"
            >
              [GitHub] : github.com/tawhidkr/PyTensor
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              className="App-link"
              href="https://velog.io/@sidcode"
              target="_blank"
              rel="noopener noreferrer"
            >
              [velog] : velog.io/@sidcode
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              className="App-link"
              href="https://sidcode.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              [medium] : sidcode.medium.com
            </a>
          </td>
        </tr>
        <tr>
          <td>
            {/* <Routes /> */}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Links;
