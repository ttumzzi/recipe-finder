import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Info from "./Info";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header className="Home-header">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="f3 f2-m f1-l white-90">Recipe Finder</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/recipe/:id" component={Info} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
