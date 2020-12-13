import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Velog from "../blog/velog";
import Medium from "../blog/medium";
import LinkBlog from "./LinkBlog";

function Routes() {
  return (
    <div>
      <Router>
        <LinkBlog />
        <Route path="/velog" component={Velog} />
        <Route path="/medium" component={Medium} />
      </Router>
    </div>
  );
}

export default Routes;
