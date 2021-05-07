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
import MoviesApi from '../../utils/MoviesApi';
import auth from '../../utils/Auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    MoviesApi.getAllMovies()
    .then((movies)=> {
      localStorage.setItem('movies', JSON.stringify(movies));
    })
    .catch((error) => alert(error)) 
  }, []);

  function handleMovieLike(movie) {
    console.log('like')
    //console.log(movie)
    //const newMovies = [...savedMovies, movie];
    //console.log(test)
    //setSavedMovies(newMovies);
    /* MainApi.likeMovie(movie)
    .then((newMovie) => {
      console.log(newMovie);
      //const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      //setCards(newCards);
    })
    .catch((error) => alert(error)) */
  }

  function handleMovieDislike(movie) {
    console.log('dislike')
    
    //const newMovies = savedMovies.filter((m) => m.id !== movie.id);
    //setSavedMovies(newMovies);
    /* MainApi.likeMovie(movie)
    .then((newMovie) => {
      console.log(newMovie);
      //const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      //setCards(newCards);
    })
    .catch((error) => alert(error)) */
  }

  function onRegister(name, email, password) {
    auth.register(name, email, password)
    .then((res) => {
      history.push('/signin'); 
    })
    .catch((error) => {
      console.log(error)
      alert(error)
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

        <ProtectedRoute path ='/movies' isLoggedIn={isLoggedIn} component={Movies} />
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
