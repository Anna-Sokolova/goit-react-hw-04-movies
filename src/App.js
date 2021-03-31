import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => (
  <>
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
    </Switch>
  </>
);

export default App;
