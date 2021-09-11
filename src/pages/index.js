import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Issue } from "./Issue";
import { Verify } from "./Verify";
import { Organization } from "./Organization";
import { Document } from "./Document";

export default function Pages() {
  return (
    <Router>
      <Switch>
        <Route path="/organizations/:did">
          <Organization />
        </Route>
        <Route path="/documents/:did">
          <Document />
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
