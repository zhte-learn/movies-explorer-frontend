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
      <nav class="side-menu__nav">
        <NavLink
          exact to="/"
          class="side-menu__link"
          activeClassName="side-menu__link_active"
          activeStyle={{ borderBottom: '2px solid white' }}>
            Главная
        </NavLink>
        <NavLink
          to="/movies"
          class="side-menu__link"
          activeClassName="side-menu__link_active"
          activeStyle={{ borderBottom: '2px solid white' }}>
            Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          class="side-menu__link"
          activeClassName="side-menu__link_active"
          activeStyle={{ borderBottom: '2px solid white' }}>
            Сохраненные фильмы
        </NavLink>
        <NavLink
          to="/profile"
          class="side-menu__link side-menu__link_profile"
          activeClassName="side-menu__link_active"
          activeStyle={{ borderBottom: '2px solid white' }}>
            Аккаунт
        </NavLink>
      </nav>
    </section>
  )
}

export default SideNav;