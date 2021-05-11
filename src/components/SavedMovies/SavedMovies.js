import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainApi from '../../utils/MainApi';

function SavedMovies (props) {
  const [savedMovies, setSavedMovies] = React.useState([]);

  React.useEffect(() => {
    MainApi.getSavedMovies()
    .then((movies)=> {
      setSavedMovies(movies);
      //пробежаться по всем фильмам, выдернуть id, создать массмв из id, создавть из них стейт, когда отображаю карточку
    })
    .catch((error) => console.log(error)) 
  }, []);
  
  return(
    <>
    <Header 
      isLoggedIn={props.isLoggedIn}
    />
      <main className="content">
        <SearchForm />
        <MoviesCardList 
          movies={savedMovies}
          isSaved={true}
        /> 
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;