import './MoviesCard.css';
import filmImage from '../../images/film-1.jpg';

function MoviesCard () {
  return(
    <li className="film">
      <button className="button button_like" type="button" aria-label="Поставить лайк"></button>
      <figure className="film__figure">             
        <figcaption className="film__caption">
          <h2 className="film__title">33 слова о дизайне</h2>
          <p className="film__duration">1ч 47м</p>
        </figcaption>
        <div className="film__image-container">
          <img className="film__image" alt="Кадр из фильма" src={filmImage} />
        </div>
      </figure>  
    </li>
  )
}

export default MoviesCard;