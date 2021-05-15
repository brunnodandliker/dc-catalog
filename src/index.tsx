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

import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
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
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
