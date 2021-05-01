import studentImage from '../../images/student-image.jpg';
import './AboutMe.css';

function AboutMe ({ id }) {
  return(
    <section className="student">
      <div className="student__content container container_main">
        <h2 className="section__title" id={id}>Студент</h2>
        <div className="container container_two-column">
          <div className="student__info">
            <div>
              <h3 className="student__name">Виталий</h3>
              <p className="student__job">Фронтенд-разработчик, 30 лет</p>
              <p className="student__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
                начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>  
            </div>                
            <ul className="student__social">
              <li><a className="student__social-link" href="#">Facebook</a></li>
              <li><a className="student__social-link" href="#">Github</a></li>
            </ul>
          </div> 
            
          <div className="student__image-container">
            <img className="student__image" src={studentImage} alt="Изображение студента" />  
          </div>              
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
