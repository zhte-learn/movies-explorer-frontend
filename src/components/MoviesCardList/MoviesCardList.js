import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

//стейт сколько карточек показываем, стейт по умолчанию 3, кпопка - если фильмов больше 3, то показываю ее. 
//если клик, то увеличить setState(state+3)
//for(let i = 0; i < min(props.movies.length, state); i++)
//id заменить на props.movies[i].id
//...rest заменить props.movies[i]

function MoviesCardList(props) {
  return(
    <section className="film-gallery">
      <div className="container container_main-708px">
        <ul className="film-list">
          {props.movies.map(({ id, ...rest}) => (
            <MoviesCard key={id} id={id} {...rest} onMovieLike={props.onMovieLike} onMovieDislike={props.onMovieDislike}/>)
          )}
        </ul>
      </div>
    </section>
  )
}

export default MoviesCardList;