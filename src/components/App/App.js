import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';

import ProtectedRoute from '../ProtectedRoute';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import auth from '../../utils/Auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const history = useHistory();

  function onRegister(name, email, password) {
    auth.register(name, email, password)
    .then((res) => {
      //console.log(res)
      history.push('/signin');   
    })
    .catch((e) => {
      //console.log(e);
      history.push('/signup');
    })
  }

  function onLogin(email, password) {
    auth.authorize(email, password)
    .then(() => {
      setIsLoggedIn(true);
      history.push('/movies');
    })
    .catch((error) => alert(error))
  }

  return (
    <div className="page">
      <Switch>
        <Route path ='/signup'>
          <Register 
            onRegister={onRegister}
          />
        </Route>
        <Route path ='/signin'>
          <Login 
            onLogin={onLogin}
          />
        </Route>
        <Route exact path ='/'>
          <Main
            isLoggedIn={isLoggedIn}
          />
        </Route>

        <ProtectedRoute
          path ='/movies'
          isLoggedIn={isLoggedIn}
          component={Movies} 
        />
        <ProtectedRoute path ='/saved-movies' isLoggedIn={isLoggedIn} component={SavedMovies} />
        <ProtectedRoute path ='/profile' isLoggedIn={isLoggedIn} component={Profile} />
          
        <Route path ='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
