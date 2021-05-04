import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Profile.css';

function Profile (props) {
  return(
    <>
      <Header 
        isLoggedIn={props.isLoggedIn}
      />

      <section className="profile">
        <div className="profile__content">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <div className="profile__elem">
            <span>Имя</span>
            <p className="profile__text profile__text_name">Виталий</p>
          </div>

          <div className="profile__elem profile__elem_email">
            <span>Почта</span>
            <p className="profile__text profile__text_email">pochta@yandex.ru</p>
          </div>
        
          <ul className="profile__bottom">
            <li>
              <button className="button button_edit" type="button" name="edit">Редактировать</button>
            </li>
            <li>
              <Link to="/">
                <button className="button button_exit" type="button" name="exit">Выйти из аккаунта</button>
              </Link>              
            </li>  
          </ul>
        </div>
      </section>
    </>
  )
}

export default Profile;