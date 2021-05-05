import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  console.log(props)
  return(
    <section className="film-gallery">
      <div className="container container_main-708px">
        <ul className="film-list">
          {props.movies.map(({ _id, ...rest}) => (
            <MoviesCard key={_id} _id={_id} {...rest} />)
          )}
        </ul>
      </div>
    </section>
  )
}

export default MoviesCardList;