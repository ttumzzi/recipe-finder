import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Info from './containers/Info';

const App = () => {
  return (
    <div>
      <header className="Home-header">
        <Link
          to="/recipe-finder/home"
          style={{
            textDecoration: 'none',
          }}
        >
          <h1 className="f3 f2-m f1-l white-90">Recipe Finder</h1>
        </Link>
      </header>

      <Switch>
        <Route path="/recipe-finder/home" component={Home}>
          <Home />
        </Route>
        <Route path="/recipe-finder/recipe/:id" component={Info}>
          <Info />
        </Route>
        <Route path="/recipe-finder" component={Home}>
          <Home />
        </Route>
        <Route path="/" component={Home}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
