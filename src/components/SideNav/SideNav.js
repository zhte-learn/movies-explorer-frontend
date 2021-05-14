/* import { Link } from 'react-router-dom'; */
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuContext } from '../../context/menuState';
import './SideNav.css';

function SideNav () {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };
  
  return(
    <section className={`side-menu ${isMenuOpen && "side-menu_opened"}`}>
      <button
        className="button button_close"
        type="button"
        aria-label="Закрыть меню"
        onClick={clickHandler}>
      </button>
      <nav className="side-menu__nav">
        <NavLink
          exact to="/"
          className="side-menu__link"
          activeClassName="side-menu__link_active"
          activeStyle={{ borderBottom: '2px solid white' }}>
            Главная
        </NavLink>
        <NavLink
          to="/movies"
          className="side-menu__link"
          activeClassName="side-menu__link_active"
          activeStyle={{ borderBottom: '2px solid white' }}>
            Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className="side-menu__link"
          activeClassName="side-menu__link_active"
          activeStyle={{ borderBottom: '2px solid white' }}>
            Сохраненные фильмы
        </NavLink>
      </nav>
      <NavLink
        to="/profile"
        className="side-menu__link side-menu__link_profile"
        activeClassName="side-menu__link__profile_active"
        activeStyle={{ borderBottom: '2px solid white' }}>
          <span className="side-menu__profile-title">Аккаунт</span>
      </NavLink>
    </section>
  )
}

export default SideNav;