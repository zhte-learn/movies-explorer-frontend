import './Portfolio.css';

function Portfolio () {
  return(
    <section className="portfolio">
      <div className="portfolio__content container container_main">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <p className="portfolio__item-title">Статичный сайт</p>
            <a className="portfolio__link" href="https://facebook.com" target="_blank" rel="noreferrer">&nbsp;</a>
          </li>
          <li className="portfolio__item">
            <p className="portfolio__item-title">Адаптивный сайт</p>
            <a className="portfolio__link" href="https://facebook.com" target="_blank" rel="noreferrer">&nbsp;</a>
          </li>
          <li className="portfolio__item">
            <p className="portfolio__item-title">Одностраничное приложение</p>
            <a className="portfolio__link" href="https://facebook.com" target="_blank" rel="noreferrer">&nbsp;</a>
          </li>
        </ul>
      </div>      
    </section>
  )
}

export default Portfolio;
