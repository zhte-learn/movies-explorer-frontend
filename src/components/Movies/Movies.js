import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies (props) {
  const [filterMovies, setFilterMovies] = React.useState([]);

  function handleMovieSearch(query) {
    const movies = JSON.parse(localStorage.getItem('movies'));
    
    const filterItems = movies.filter(el => {
      for (let key of Object.keys(el)) {
        if(el[key] && el[key].toString().toLowerCase().indexOf(query.toLowerCase()) > -1){
          return true;
        }
      }
      return false;
    });
      setFilterMovies(filterItems);
  }


  return(
    <>
      <Header 
        isLoggedIn={props.isLoggedIn}
      />
      <main className="content">
        <SearchForm 
         searchCallBack={handleMovieSearch}
        />
        {filterMovies.length > 0 
          && 
          <MoviesCardList 
            movies={filterMovies}
            onMovieLike={props.onMovieLike}
            onMovieDislike={props.onMovieDislike}
        />}
      </main>
      <Footer />
    </>
  )
}

export default Movies;