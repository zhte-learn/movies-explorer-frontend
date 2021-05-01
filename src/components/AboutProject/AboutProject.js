import './AboutProject.css';

function AboutProject ({ id }) {
  return(
    <section class="about">
      <div class="about__content container container_main">
        <h2 class="section__title" id={id}>О проекте</h2>
        <ul class="about__info">
          <li class="about__info-item">
            <h3 class="about__info-title">Дипломный проект включал 5 этапов</h3>
            <p class="about__info-text">Составление плана, работу над бэкендом, вёрстку, 
              добавление функциональности и финальные доработки.</p>
          </li>
          <li class="about__info-item">
            <h3 class="about__info-title">На выполнение диплома ушло 5 недель</h3>
            <p class="about__info-text">У каждого этапа был мягкий и жёсткий дедлайн, 
              которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div class="about__graphics">
          <div class="about__graphics-weeks about__graphics-weeks_green"><span>1 неделя</span></div>
          <div class="about__graphics-plan">Back-end</div>
          <div class="about__graphics-weeks about__graphics-weeks_grey"><span>4 недели</span></div>
          <div class="about__graphics-plan">Front-end</div>
        </div>
      </div>  
    </section> 
  )
}

export default AboutProject;
