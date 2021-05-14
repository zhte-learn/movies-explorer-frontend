import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuContext } from '../../context/menuState';
import SideNav from '../SideNav/SideNav';
import './Navigation.css';

function Navigation () {
  const { toggleMenuMode } = useContext(MenuContext);
  
  const clickHandler = () => {
    toggleMenuMode();
  };

  return(
    <>  
      <nav className="navigation">
        <NavLink
          to="/movies"
          className="navigation__link"
          activeClassName="navigation__link_active"
          activeStyle={{ borderBottom: '2px solid white' }}>
            Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className="navigation__link"
          activeClassName="navigation__link_active"
          activeStyle={{ borderBottom: '2px solid white' }}>
            Сохраненные фильмы
        </NavLink>
        <NavLink
          to="/profile"
          className="navigation__link navigation__link_profile"
          activeClassName="navigation__link_active"
          activeStyle={{ borderBottom: '2px solid white' }}>
            Аккаунт
        </NavLink>
      </nav>
      <SideNav />
      <button
        className="button button_burger-menu"
        type="button"
        aria-label="Меню"
        onClick={clickHandler}
      >
      </button>
    </>
  )
}

export default Navigation;
