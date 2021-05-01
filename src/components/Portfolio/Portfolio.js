import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio () {
  return(
    <section className="portfolio">
      <div className="portfolio__content container container_main">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <p className="portfolio__item-title">Статичный сайт</p>
            <Link className="portfolio__link"></Link>
          </li>
          <li className="portfolio__item">
            <p className="portfolio__item-title">Адаптивный сайт</p>
            <Link className="portfolio__link"></Link>
          </li>
          <li className="portfolio__item">
            <p className="portfolio__item-title">Одностраничное приложение</p>
            <Link className="portfolio__link"></Link>
          </li>
        </ul>
      </div>      
    </section>
  )
}

export default Portfolio;
