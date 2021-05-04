import Popup from '../Popup/Popup';

function ErrorPopup(props) {
  return(
    <Popup
      title='Ошибка'
      btnTitle='Закрыть'
      name='error'
      isOpen={props.isOpen}
    />
  )
}

export default ErrorPopup;
