import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesApi from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi';
import ButtonMore from '../ButtonMore/ButtonMore';

function Movies (props) {
  const [filterMovies, setFilterMovies] = React.useState([]);
  const [visibleMovies, setVisibleMovies] = React.useState([]);
  const [likedMovies, setLikedMovies] = React.useState([]);

  React.useEffect(() => {
    MainApi.getSavedMovies()
    .then((movies)=> {
      setLikedMovies(movies);
    })
    .catch((error) => console.log(error)) 
  }, []);

  React.useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('storedMovies'));

    if(movies != null) {
      let moviesToShow = [];
      for(let i = 0; i < (Math.min(movies.length, 3)); i++) {
        const isMovieLiked = likedMovies.filter(el => el.movieId === movies[i].movieId);
        moviesToShow.push({...movies[i], isLiked: isMovieLiked.length > 0});
      }
      setFilterMovies(movies);
      setVisibleMovies(moviesToShow);
    }
  }, [likedMovies]);

   /* const movies = JSON.parse(localStorage.getItem('movies')); */
  function handleMovieSearch(query) {
    MoviesApi.getAllMovies()
    .then((movies)=> {
      const filterItems = movies.filter(el => {
        for (let key of Object.keys(el)) {
          if(el[key] && el[key].toString().toLowerCase().indexOf(query.toLowerCase()) > -1){
            return true;
          }
        }
        return false;
      });
  
      const adaptItems = filterItems.map(el => {
        let obj = {};
        //все обработать на null
        obj.country = el.country;
        obj.director = el.director;
        obj.duration = el.duration;
        obj.year = el.year;
        
        if(el.image === null) {
          obj.image = "";
        } else {
          obj.image = `https://api.nomoreparties.co${el.image.url}`;
        }
        
        obj.trailer = el.trailerLink;
        /* obj.thumbnail = null; */
        obj.movieId = el.id;
        obj.nameRU = el.nameRU;
        obj.nameEN = el.nameEN;
        obj.owner = null;
  
        return obj;
      })
      
      let moviesToShow = [];
      for(let i = 0; i < (Math.min(adaptItems.length, 3)); i++) {
        const isMovieLiked = likedMovies.filter(el => el.movieId === adaptItems[i].movieId);
        moviesToShow.push({...adaptItems[i], isLiked: isMovieLiked.length > 0});
      }
  
      setFilterMovies(adaptItems);
      setVisibleMovies(moviesToShow);
      localStorage.setItem('storedMovies', JSON.stringify(adaptItems));
    })
    .catch((error) => alert(error)) 
  }

  function handleMovieLike(movie) {
    MainApi.likeMovie(movie)
    .then((newMovie) => {
      console.log(newMovie)
      newMovie.isLiked = true;
      console.log(newMovie)
      setLikedMovies([...likedMovies, newMovie]);
    })
    .catch((error) => console.log(error))
  }

  function handleMovieDislike(movie) {
    const movieToDelete = likedMovies.filter(el => el.movieId === movie.movieId);
    MainApi.dislikeMovie(movieToDelete[0]._id)
    /* .then(() => {
      const newSavedMovies = savedMovies.filter((m) => m.id !== movie.id);
      setSavedMovies(newSavedMovies);
    }) */
    .catch((error) => console.log(error))
  }

  function handleButtonMoreClick() {
    const limit = Math.min(filterMovies.length, visibleMovies.length + 3);
    const arr = [];
    for(let i = visibleMovies.length; i < limit; i++) {
      const isMovieLiked = likedMovies.filter(el => el.movieId === filterMovies[i].movieId);
      arr.push({...filterMovies[i], isLiked: isMovieLiked.length > 0})
    }
    setVisibleMovies([...visibleMovies, ...arr]);
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
            movies={visibleMovies}
            onMovieLike={handleMovieLike}
            onMovieDislike={handleMovieDislike}
            isSaved={false}
          />
        }
        {filterMovies.length > visibleMovies.length
          &&
          <ButtonMore onClick={handleButtonMoreClick}/>
        }       
      </main>
      <Footer />
    </>
  )
}

export default Movies;
