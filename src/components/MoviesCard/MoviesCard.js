import React from 'react';
import './MoviesCard.css';
import adaptTime from '../../utils/adaptTime';

function MoviesCard (props) {
  const [isLiked, setIsLiked] = React.useState(props.isLiked);

  React.useEffect(() => {
    setIsLiked(props.isLiked);
  }, [props.isLiked]);

  function handleLikeClick() {  
    if(isLiked) {
      setIsLiked(false);
      props.onMovieDislike(props);
    } else {
      setIsLiked(true);
      props.onMovieLike(props);
    }
  }

  function handleDeleteClick() {
    props.onMovieDelete(props);
  }

  function handleClick() {
    if (props.trailer !== "") {
      window.open(props.trailer);
    }
  }

  return(
    <li className="film">
      {props.isSaved ? 
        <button
          className="button button_delete"
          type="button"
          aria-label="Удалить фильм"
          onClick={handleDeleteClick}>
        </button>
      :
        <button
          className={`button button_like ${isLiked ? "button_like_liked" : "button_like_inactive"}`}
          type="button"
          aria-label="Поставить лайк"
          onClick={handleLikeClick}>
        </button>
      }
      <figure className="film__figure">             
        <figcaption className="film__caption">
          <h2 className="film__title">{props.nameRU}</h2>
          <p className="film__duration">{adaptTime(props.duration)}</p>
        </figcaption>
        <div className="film__image-container">
        <img
          className="film__image"
          alt={`Кадр из фильма ${props.nameRU}`}
          src={props.image} 
          onClick={handleClick}
        />
        </div>
      </figure>  
    </li>
  )
}

export default MoviesCard;
