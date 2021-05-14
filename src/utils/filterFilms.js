export default function filterFilms (movies, query, isShortMovie) {
  return movies.filter(el => {
    if(isShortMovie && el.duration > 40) {
      return false;
    }
    for (let key of Object.keys(el)) {
      if(el[key] && el[key].toString().toLowerCase().indexOf(query.toLowerCase()) > -1){
        return true;
      }
    }
    return false;
  })
}
