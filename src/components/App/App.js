import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [isLoggedIn] = React.useState(false);

  return (
    <div className="page">
      <Switch>
        <Route path ='/signup'>
          <Register />
        </Route>
        <Route path ='/signin'>
          <Login />
        </Route>
        <Route exact path ='/'>
          <Main
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path ='/movies'>
          <Movies
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path ='/saved-movies'>
          <SavedMovies
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path ='/profile'>
          <Profile
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path ='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
