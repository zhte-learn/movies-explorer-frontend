import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainApi from '../../utils/MainApi';
import filterFilms from '../../utils/filterFilms';

function SavedMovies (props) {
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [moviesToShow, setMoviesToShow] = React.useState([]);

  React.useEffect(() => {
    MainApi.getSavedMovies()
    .then((movies)=> {
      setSavedMovies(movies);
      setMoviesToShow(movies);
    })
    .catch((error) => props.showError(error)) 
  }, [props]);

  function handleSeach(query, isShortMovie) {
    const filterItems = filterFilms(savedMovies, query, isShortMovie);
    setMoviesToShow(filterItems);
  }

  function handleMovieDelete(movie) {
    MainApi.dislikeMovie(movie._id)
      .then(movie => {
        const arr = savedMovies.filter(el => el._id !== movie._id);
        setSavedMovies(arr);
        const arr2 = moviesToShow.filter(el => el._id !== movie._id);
        setMoviesToShow(arr2);
      })
      .catch((error) => props.showError(error))
  }
  
  return(
    <>
    <Header 
      isLoggedIn={props.isLoggedIn}
    />
      <main className="content">
        <SearchForm searchCallBack={handleSeach}/>
        <MoviesCardList 
          movies={moviesToShow}
          isSaved={true}
          onMovieDelete={handleMovieDelete}
        /> 
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
