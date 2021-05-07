import React from 'react';
import './MoviesCard.css';

function MoviesCard (props) {
  const [isLiked, setIsLiked] = React.useState(false);

  function handleLikeClick() {  
    if(isLiked) {
      setIsLiked(false);
      props.onMovieDislike(props);
    } else {
      setIsLiked(true);
      props.onMovieLike(props);
    }
  }

  return(
    <li className="film">
      <button
        className={`button button_like ${isLiked ? "button_like_liked" : "button_like_inactive"}`}
        type="button"
        aria-label="Поставить лайк"
        onClick={handleLikeClick}>
      </button>
      {/* <button className="button button_like button_like_liked" type="button" aria-label="Карточка отмечена"></button>
      <button className="button button_delete" type="button" aria-label="Поставить лайк"></button> */}
      <figure className="film__figure">             
        <figcaption className="film__caption">
          <h2 className="film__title">{props.nameRU}</h2>
          <p className="film__duration">{props.duration}</p>
        </figcaption>
        <div className="film__image-container">
          <img className="film__image" alt={`Кадр из фильма ${props.nameRU}`} src={`https://api.nomoreparties.co${props.image.url}`} />
        </div>
      </figure>  
    </li>
  )
}

export default MoviesCard;
