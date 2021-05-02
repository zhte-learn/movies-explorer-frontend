import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList () {
  return(
    <section className="film-gallery">
      <div className="container container_main-708px">
        <ul className="film-list">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
      </div>
    </section>
  )
}

export default MoviesCardList;