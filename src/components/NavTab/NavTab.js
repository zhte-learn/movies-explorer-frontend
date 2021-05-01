import { Link, animateScroll as scroll } from "react-scroll";
/* import { Link } from 'react-router-dom'; */
import './NavTab.css';

function NavTab () {
  return(
    <ul className="nav__menu">
      <li className="nav__item">
        <Link 
          activeClass="active"
          to="about-project"
          className="nav__link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
            О проекте
        </Link>
      </li>
      <li className="nav__item">
        <Link
          activeClass="active"
          to="techs"
          className="nav__link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
            Технологии
        </Link>
      </li>
      <li className="nav__item">
        <Link
          activeClass="active"
          to="about-me"
          className="nav__link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
            Студент
        </Link> 
      </li>
    </ul>
  )
}

export default NavTab;
