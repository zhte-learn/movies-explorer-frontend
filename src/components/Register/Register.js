import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.jpeg';

function Register () {
  return(
    <section className="auth">
      <div className="container container_narrow">
        <Link to="/" className="logo__link">
          <img className="logo" src={logo} alt="Изображение логотипа" />
        </Link>
        
        <form className="form form_auth" action="post">
          <h1 className="form__title">Добро пожаловать!</h1>          
          <label for="name">
            Имя
            <input id="name" className="form__input form__input_auth form__input-error" type="text" name="name" placeholder="Виталий" />              
          </label>
          <span id="name-input-error" className="form__input-error-message"></span>
          
          <label for="email">
            E-mail
            <input id="email" className="form__input form__input_auth"  type="text" name="name" placeholder="pochta@yandex.ru" />
          </label>
          <span id="email-input-error" className="form__input-error-message"></span>
          
          <label for="password">
            Пароль
            <input id="password" className="form__input form__input_auth"  type="password" name="password" />
          </label>
          <span id="password-input-error" className="form__input-error-message">Неправильный пароль</span>
          
          <button className="button button_auth" type="submit">Зарегистрироваться</button>
        </form>
        <div className="auth__bottom">
          <p className="auth__text">Уже зарегистрированы?</p>
          <Link to="/signin" className="auth__link">Войти</Link>
        </div>
      </div>        
    </section>
  )
}

export default Register;
