import React from 'react';
import './MoviesCard.css';

//распечатать пропс, увидеть _id из базы данных

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

  function cutString(str) {
    if(str.length > 32) {
      return `${str.substr(0, 32)}...`;
    }
    return str;
  }

  function adaptTime(num) {
    const hours = Math.floor(num / 60);
    const minutes = Math.floor(((num % 60) * 100) / 100);

    return `${hours}ч ${minutes}м`;
  }

  //если saved true, значит кнопка удаления. Наоборот, кнопка лайка
  //удаление карточки

  return(
    <li className="film">
      {props.isSaved ? 
        <button className="button button_delete" type="button" aria-label="Поставить лайк"></button>
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
          <h2 className="film__title">{cutString(props.nameRU)}</h2>
          <p className="film__duration">{adaptTime(props.duration)}</p>
        </figcaption>
        <div className="film__image-container">
        <img className="film__image" alt={`Кадр из фильма ${props.nameRU}`} src={props.image} />
        </div>
      </figure>  
    </li>
  )
}

export default MoviesCard;
