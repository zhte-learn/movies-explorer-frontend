
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = React.useState(true);

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
      </Switch>
    </div>
  );
}

export default App;
