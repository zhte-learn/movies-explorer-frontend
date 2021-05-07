import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies (props) {

  const [savedMovies, setSavedMovies] =React.useState([]);
  //здесь сделать запрос к серверу get, получить сохранненые фильмы, создать стейт savedMovies
  return(
    <>
    <Header 
      isLoggedIn={props.isLoggedIn}
    />
      <main className="content">
        <SearchForm />
        <MoviesCardList 
          movies={savedMovies}
        /> 
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;