import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Profile.css';
import { useFormWithValidation } from '../../utils/FormValidator';
import { currentUserContext } from '../../context/currentUserContext';

function Profile (props) {
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);
  const currentUser = React.useContext(currentUserContext);
  const validator = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: 'name' in validator.values ? validator.values.name :  currentUser.name,
      email: 'email' in validator.values ? validator.values.email :  currentUser.email,
    });
  }

  function handleLogOut() {
    localStorage.clear();
    props.onLogOut(false);
  }

  React.useEffect(() => {
    let disableSubmit = true;
    for (let key of Object.keys(validator.values)) {
      if(currentUser[key] !== validator.values[key]) {
        disableSubmit = false;
      }
    }
    setIsSubmitDisabled(disableSubmit);
  }, [validator, currentUser]);

  return(
    <>
      <Header 
        isLoggedIn={props.isLoggedIn}
      />

      <section className="profile">
        <div className="profile__content">
          <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>

          <form className="form form_profile" method="POST" name="profileForm" onReset={validator.resetForm}
            onSubmit={handleSubmit}>
            <fieldset className="form_profile-name">
              <label for="name">Имя</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form__input form__input_name" 
                defaultValue={currentUser.name}
                minLength="1"
                maxLength="30"
                pattern="^[a-zA-Zа-яА-Я\-\s]*$"
                required
                onChange={validator.handleChange}
              />             
            </fieldset>
            <span
              id="name-input-error"
              className={`form__input-error-message ${validator.errors.name && validator.errors.name.length>0 && 'form__input-error-message_active'}`}>
                {validator.errors.name}
            </span> 
            <fieldset className="form_profile-email">
              <label for="email">Почта</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form__input form__input_email" 
                defaultValue={currentUser.email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
                onChange={validator.handleChange}
              />             
            </fieldset>
            <span
              id="email-input-error"
              className={`form__input-error-message ${validator.errors.email && validator.errors.email.length>0 && 'form__input-error-message_active'}`}>
                {validator.errors.email}
            </span>          
            <button
              className={`button button_edit 
                ${(validator.isValid && !isSubmitDisabled) && 'button_edit_active'} 
                ${(!validator.isValid || isSubmitDisabled) && 'button_edit_disabled'}`}
              type="submit"
              name="edit">
                Редактировать
            </button>
          </form>
  
          <Link
            to="/signin"
            className="profile__link-exit"
            onClick={handleLogOut}>
              Выйти из аккаунта
          </Link>                       
        </div>
      </section>
    </>
  )
}

export default Profile;
