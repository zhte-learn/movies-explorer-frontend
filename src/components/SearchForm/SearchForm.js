import './SearchForm.css';
import { useFormWithValidation } from '../../utils/FormValidator';

function SearchForm (props) {
  const validator = useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    props.searchCallBack(validator.values.filmSearch);
  }
  /* console.log(validator.errors) */

  return(
    <section className="film-search">
      <div className="film-search__content container container_main-708px">
        <form className="form form_search" method="POST" name="searchFilmForm" onReset={validator.resetForm} 
          onSubmit={handleSubmit}>
          <div className="form__top">
            <input
              id="search"
              name="filmSearch"
              type="text"
              className="form__input form__input_search" 
              placeholder="Фильм"
              minLength="1"
              required
              onChange={validator.handleChange}
            />
            <button
              className={`button button_search ${validator.isValid && 'button_search_active'} ${!validator.isValid && 'button_search_disabled'}`}
              type="submit">
                Найти
            </button>
          </div>
          <span
            id="search-input-error"
            className={`form__input-error-message ${validator.errors.filmSearch && validator.errors.filmSearch.length>0 && 'form__input-error-message_active'}`}>
              {validator.errors.filmSearch}
          </span>            
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