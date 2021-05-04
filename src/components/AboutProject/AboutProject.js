import './AboutProject.css';

function AboutProject ({ id }) {
  return(
    <section className="about">
      <div className="about__content container container_main">
        <h2 className="section__title" id={id}>О проекте</h2>
        <ul className="about__info">
          <li className="about__info-item">
            <h3 className="about__info-title">Дипломный проект включал 5 этапов</h3>
            <p className="about__info-text">Составление плана, работу над бэкендом, вёрстку, 
              добавление функциональности и финальные доработки.</p>
          </li>
          <li className="about__info-item">
            <h3 className="about__info-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about__info-text">У каждого этапа был мягкий и жёсткий дедлайн, 
              которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className="about__graphics">
          <div className="about__graphics-weeks about__graphics-weeks_green"><span>1 неделя</span></div>
          <div className="about__graphics-plan">Back-end</div>
          <div className="about__graphics-weeks about__graphics-weeks_grey"><span>4 недели</span></div>
          <div className="about__graphics-plan">Front-end</div>
        </div>
      </div>  
    </section> 
  )
}

export default AboutProject;
