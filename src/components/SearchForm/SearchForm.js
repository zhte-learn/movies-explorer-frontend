import './SearchForm.css';

function SearchForm () {
  return(
    <section className="film-search">
      <div className="film-search__content container container_main-708px">
        <form className="form form_search" method="POST" name="searchFilmForm" required>
          <div className="form__top">
            <input id="search-input" name="filmSearch" type="text" className="form__input form__input_search" 
            placeholder="Фильм" />
            <button className="button button_search" type="submit">Найти</button>
          </div>            
          <div className="form__checkbox">
            <input id="search-checkbox" className="form__input form__input_checkbox" type="checkbox" name="shortFilm" />            
            <label for="search-checkbox" className="form__input_checkbox-label">Короткометражки</label>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SearchForm;