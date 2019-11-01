import { HashRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Popular from '../components/pages/Lists/Popular';
import TopRated from '../components/pages/Lists/TopRated';
import TvShows from '../components/pages/Lists/TvShows';
import MoviePage from '../components/pages/MoviePage/MoviePage';
import TvPage from '../components/pages/TvPage/TvPage';
import Home from '../components/pages/Home/Home';
import PersonPage from '../components/pages/PersonPage/PersonPage';
import Account from '../components/pages/AccountPage/Account';
import Error from '../components/pages/Error';
import HeaderHandler from '../components/HeaderHandler';
import Footer from '../components/Footer';

import '../style/index.scss';

export default function routing() {
  return (
    <HashRouter>
      <Route component={HeaderHandler} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/popular/:page?" component={Popular} />
        <Route path="/topRated/:page?" component={TopRated} />
        <Route path="/tvShows/:page?" component={TvShows} />
        <Route path="/tv/:tvId" component={TvPage} />
        <Route path="/movie/:movieId" component={MoviePage} />
        <Route path="/person/:personId" component={PersonPage} />
        <Route path="/account" component={Account} />
        <Route component={Error} />
      </Switch>
      <Route component={Footer} />
    </HashRouter>
  );
}
