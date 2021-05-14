export default function adaptObject (arr) {
  return arr.map(el => {
    let obj = {};

    if(el.country === null) {
      obj.country = "";
    } else {
      obj.country = el.country;
    }
    if(el.director === null) {
      obj.director = "";
    } else {
      obj.director = el.director;
    }
    if(el.duration === null) {
      obj.duration = 0;
    } else {
      obj.duration = el.duration;
    }
    if(el.year === null) {
      obj.year = "";
    } else {
      obj.year = el.year;
    }
    if(el.image === null) {
      obj.image = 'https://images.unsplash.com/photo-1588066801004-3d2a8ef323d7';
    } else {
      obj.image = `https://api.nomoreparties.co${el.image.url}`;
    }
    if(el.trailerLink === null) {
      obj.trailer = "";
    } else {
      obj.trailer = el.trailerLink;
    }
    /* obj.thumbnail = null; */
    obj.movieId = el.id;
    if(el.nameRU === null) {
      obj.nameRU = "";
    } else {
      obj.nameRU = el.nameRU;
    }
    if(el.nameEN === null) {
      obj.nameEN = "";
    } else {
      obj.nameEN = el.nameEN;
    }
    obj.owner = null;

    return obj;
  })
}
