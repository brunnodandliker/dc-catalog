import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeroDetails from './pages/HeroDetails';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hero/:id">
            <HeroDetails />
          </Route>
         {/*  <Route path="/">
            <Home />
          </Route> */}
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
