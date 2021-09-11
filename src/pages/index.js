import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Issue } from "./Issue";
import { Verify } from "./Verify";

export default function Pages() {
  return (
    <Router>
      <Switch>
        <Route path="/verify/:did">
          <Verify />
        </Route>
        <Route path="/verify">
          <Verify />
        </Route>
        <Route path="/issue">
          <Issue />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
