import Popup from '../Popup/Popup';

function EditProfilePopup() {
  return (
    <Popup
      title='Редактировать профиль'
      btnTitle='Сохранить'
      name='edit'
    >
      <input 
        id="name-input" 
        name="name" 
        type="text" 
        className="form__input form__input_text_name" 
        placeholder="Имя" 
        minLength="2" 
        maxLength="40" 
        required
      />
      <span id="name-input-error" className="form__input-error"></span>

      <input 
        id="email-input" 
        name="email" 
        type="text" 
        className="form__input form__input_text_email" 
        placeholder="Электронная почта" 
        minLength="2" 
        maxLength="200" 
        required
      />
      <span id="email-input-error" className="form__input-error"></span>
    </Popup>
  )
}

export default EditProfilePopup;
