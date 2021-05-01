import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList () {
  return(
    <section class="film-gallery">
      <div class="container container_main-708px">
        <ul class="film-list">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
      </div>
    </section>
  )
}

export default MoviesCardList;