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
import MoviesApi from '../../utils/MoviesApi';

function App() {
  const [isLoggedIn] = React.useState(false);
  

  const query = 'чупи';

  React.useEffect(() => {
    MoviesApi.getAllMovies()
    .then((movies)=> {
      localStorage.setItem('movies', JSON.stringify(movies));
    })
    .catch((error) => alert(error)) 
  }, []);

  /* React.useEffect(() => {
    MoviesApi.getAllMovies()
    .then((movies)=> {
    console.log(Object.keys(movies[0]))

    const filterItems = movies.filter(el => {
      for (let key of Object.keys(el)) {
        if(el[key] && el[key].toString().toLowerCase().indexOf(query.toLowerCase()) > -1){
          return true;
        }
      }
      return false;
    });
      console.log(filterItems); 
      setFilterMovies(filterItems);
      console.log(filterMovies)
    })
    .catch((error) => alert(error))
  }); */

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
