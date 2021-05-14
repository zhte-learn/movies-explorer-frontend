import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return(
    <section className="film-gallery">
      <div className="container container_main-708px">
        {props.movies.length === 0
          ? (localStorage['storedMovies'] === null) && <p className="film-notfound">Ничего не найдено</p>
          :
          <ul className="film-list">
            {props.movies.map(({ id, ...rest}) => (
              <MoviesCard
                key={id}
                {...rest}
                onMovieLike={props.onMovieLike}
                onMovieDislike={props.onMovieDislike}
                onMovieDelete={props.onMovieDelete}
                isSaved={props.isSaved}
              />)
            )}
          </ul> 
        }        
      </div>
    </section>
  )
}

export default MoviesCardList;
