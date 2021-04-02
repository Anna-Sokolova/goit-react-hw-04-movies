import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//pages
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MoviesDetailsPage';

//routes
import routes from './routes';

//components
import AppBar from './components/AppBar/AppBar';

const App = () => (
  <>
    <AppBar />

    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route exact path={routes.movies} component={MoviesPage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
      <Redirect to={routes.home} />
    </Switch>
  </>
);

export default App;
