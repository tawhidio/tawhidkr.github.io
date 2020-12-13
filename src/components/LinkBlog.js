import React from "react";
import { Link } from "react-router-dom";

function LinkBlog() {
  return (
    <div>
      <div>
        <Link to="/velog">Velog</Link>
      </div>
      <div>
        <Link to="/medium">Medium</Link>
      </div>
    </div>
  );
}

export default LinkBlog;
