import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/FormValidator';
import './Login.css';
import logo from '../../images/logo.jpeg';
import ButtonAuth from '../ButtonAuth/ButtonAuth';

function Login (props) {
  const validator = useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
    props.onLogin(validator.values.email, validator.values.password);
    event.target.reset();
  }

  return(
    <section className="auth">
      <div className="container container_narrow">
        <Link to="/" className="logo__link">
          <img className="logo" src={logo} alt="Изображение логотипа" />
        </Link>
        
        <form
          className="form form_auth"
          action="post"
          onSubmit={handleSubmit}
          onReset={validator.resetForm}
        >
          <h1 className="form__title">Рады видеть!</h1>
          
          <label for="email">
            E-mail
            <input
              id="email"
              className="form__input form__input_auth" 
              type="email"
              name="email"
              placeholder=""
              minLength="2"
              maxLength="30"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
              onChange={validator.handleChange}
            />
          </label>
          <span
            id="email-input-error"
            className={`form__input-error-message ${!validator.isValid && 'form__input-error-message_active'}`}>
              {validator.errors.email}  
          </span>
          
          <label for="password">
            Пароль
            <input
              id="password"
              className="form__input form__input_auth"
              type="password"
              name="password"
              minLength="3"
              maxLength="10"
              required
              onChange={validator.handleChange}
            />
          </label>
          <span id="password-input-error"
            className={`form__input-error-message ${!validator.isValid && 'form__input-error-message_active'}`}>
              {validator.errors.password}
          </span>

          <ButtonAuth
            text="Войти"
            isValid={validator.isValid}
          />
        </form>
        <div className="auth__bottom">
          <p className="auth__text">Ещё не зарегистрированы?</p>
          <Link to="signup" className="auth__link">Регистрация</Link>
        </div>
      </div>        
    </section>
  )
}

export default Login;
