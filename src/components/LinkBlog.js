import React from "react";
import { Link } from "react-router-dom";

function LinkBlog() {
  return (
    <div>
      <div>
        <Link to="/velog" className="App-link">Velog</Link>
      </div>
      <div>
        <Link to="/medium" className="App-link">Medium</Link>
      </div>
    </div>
  );
}

export default LinkBlog;
