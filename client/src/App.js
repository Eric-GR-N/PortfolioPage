import React from 'react';
import { HashRouter as Router, Link, Route, Switch} from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route to="/" exact>
          <HomePage id="home"/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
