import React from "react";
import ReactDOM from "react-dom";
import ReactGA from 'react-ga';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import Home from "views/Home/Home.js";

var hist = createBrowserHistory();

ReactGA.initialize('G-BGXBJNNS52');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/components" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
