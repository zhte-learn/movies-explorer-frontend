import './Popup.css';
function Popup ( {title, children, btnTitle, name, isOpen} ) {

  return (
    <div className={ `popup popup_${name} ${isOpen && 'popup_opened'}` }>
      <div className="popup__container"> 
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть попап">
        </button>
          
        <form className={`form form_${name}`} method="POST" name={`${name}Form`}>  
          <h3 className="popup__title">{title}</h3>
          {children}
          <button className="popup__button" type="submit">{btnTitle}</button>
        </form>
      </div>
    </div>
  )
}

export default Popup;
