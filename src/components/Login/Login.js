import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.jpeg';

function Login () {
  return(
    <section className="auth">
      <div className="container container_narrow">
        <Link to="/" className="logo__link">
          <img className="logo" src={logo} alt="Изображение логотипа" />
        </Link>
        
        <form className="form form_auth" action="post">
          <h1 className="form__title">Рады видеть!</h1>
          
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
          
          <button className="button button_auth" type="submit">Войти</button>
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
