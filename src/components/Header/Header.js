import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpeg';
import MenuState from '../../context/menuState';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header (props) {
  return(
    <header className="header">
      <div className="header__content container container_main-708px">
        <Link to="/" className="logo__link">
          <img className="logo" src={logo} alt="Изображение логотипа" />
        </Link>

        { !props.isLoggedIn ?
          <ul className="header__auth">
          <li><Link to="/signup" className="header__auth-link">Регистрация</Link></li>
          <li><Link to="/signin" className="header__auth-link header__auth-link_active">Войти</Link></li>
        </ul> :
        <MenuState>
          <Navigation />
        </MenuState>
        }

      </div>      
    </header>
  )
}

export default Header;
