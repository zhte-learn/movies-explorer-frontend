import './Techs.css';

function Techs ({ id }) {
  return(
    <section className="technology">
      <div className="technology__content container container_main">
        <h2 className="section__title" id={id}>Технологии</h2>
        <h3 className="technology__title">7 технологий</h3>
        <p className="technology__subtitle">На курсе веб-разработки мы освоили технологии, 
          которые применили в дипломном проекте.</p>
        <ul className="technology__list">
          <li className="technology__item">HTML</li>
          <li className="technology__item">CSS</li>
          <li className="technology__item">JS</li>
          <li className="technology__item">React</li>
          <li className="technology__item">Git</li>
          <li className="technology__item">Express.js</li>
          <li className="technology__item">MongoDB</li>
        </ul>
      </div>  
    </section>
  )
}

export default Techs;
