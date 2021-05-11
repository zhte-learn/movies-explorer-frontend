import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return(
    <section className="film-gallery">
      <div className="container container_main-708px">
        <ul className="film-list">
          {props.movies.map(({ id, ...rest}) => (
            <MoviesCard
              key={id}
              {...rest}
              onMovieLike={props.onMovieLike}
              onMovieDislike={props.onMovieDislike}
              isSaved={props.isSaved}
            />)
          )}
        </ul>
      </div>
    </section>
  )
}

export default MoviesCardList;
