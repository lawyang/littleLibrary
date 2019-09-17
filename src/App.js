import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

//Pages
import Home from '../src/components/pages/Home';
import PageOne from '../src/components/pages/PageOne';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={Home}
        />
        <Route
          path="/pageOne"
          component={PageOne}
        />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
