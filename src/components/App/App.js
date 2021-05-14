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
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import PageNotFound from '../PageNotFound/PageNotFound';
import auth from '../../utils/Auth';
import MainApi from '../../utils/MainApi';
import { currentUserContext } from '../../context/currentUserContext';

function App() {
  const history = useHistory();
  const [ isLoggedIn, setIsLoggedIn ] = React.useState(false);
  const [ currentUser, setCurrentUser ] = React.useState('');
  const [ isInfoTooltipOpen, setIsInfoTooltipOpen ] = React.useState(false);
  const [ errorMessage, setErrorMessage ] = React.useState('');

  function showPopupError(error) {
    if(error.message) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage(error.validation.body.message);
    }    
    setIsInfoTooltipOpen(true);
  }

  React.useEffect(() => {
    const tockenCheck = () => {
      const token = localStorage.getItem('token');
      if (token) {
        auth.getContent(token)
        .then(() => {
          setIsLoggedIn(true);
          history.push('/movies');
        })
        .catch((error) => {
          showPopupError(error);
          history.push('/signin');
        })  
      }
    }
    tockenCheck();
  }, [history]);

  React.useEffect(() => {
    if (isLoggedIn) {
      MainApi.getUserData()
      .then(userData => {
        setCurrentUser(userData);
      })
      .catch((error) => {
        showPopupError(error);
      }) 
    }
  }, [isLoggedIn]);

  function onRegister(name, email, password) {
    auth.register(name, email, password)
    .then((res) => {
      history.push('/signin');   
    })
    .catch((error) => {
      showPopupError(error);
      history.push('/signup');
    })
  }

  function onLogin(email, password) {
    auth.authorize(email, password)
    .then(() => {
      setIsLoggedIn(true);
      history.push('/movies');
    })
    .catch((error) => {
      showPopupError(error);
    })
  }

  function handleUpdateUser(userData) {
    MainApi.updateUserData(userData)
    .then((newUserData)=> {
      setCurrentUser(newUserData);
    })
    .catch((error) => {
      showPopupError(error);
    })
  }

  function closePopup() {
    setIsInfoTooltipOpen(false);
  }

  return (
    <currentUserContext.Provider value = {currentUser}>
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
          showError={showPopupError}
        />
        <ProtectedRoute
          path ='/saved-movies'
          isLoggedIn={isLoggedIn}
          component={SavedMovies} 
          showError={showPopupError}
        />
        <ProtectedRoute
          path ='/profile'
          component={Profile}
          isLoggedIn={isLoggedIn}
          onLogOut={setIsLoggedIn}
          onUpdateUser={handleUpdateUser}
        />
          
        <Route path ='*'>
          <PageNotFound />
        </Route>
      </Switch>     
    </div>
    <InfoTooltip 
        isOpen={isInfoTooltipOpen}
        onClose={closePopup}
        errorMessage={errorMessage}
      />  
    </currentUserContext.Provider>
  );
}

export default App;
