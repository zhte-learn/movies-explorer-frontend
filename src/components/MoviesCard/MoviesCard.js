import './MoviesCard.css';
import filmImage from '../../images/film-1.jpg';

function MoviesCard () {
  return(
    <li class="film">
      <button class="button button_like" type="button" aria-label="Поставить лайк"></button>
      <figure class="film__figure">             
        <figcaption class="film__caption">
          <h2 class="film__title">33 слова о дизайне</h2>
          <p class="film__duration">1ч 47м</p>
        </figcaption>
        <div class="film__image-container">
          <img class="film__image" alt="Кадр из фильма" src={filmImage} />
        </div>
      </figure>  
    </li>
  )
}

export default MoviesCard;