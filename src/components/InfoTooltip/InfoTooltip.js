import React from 'react';
import './InfoTolltip.css';

function InfoTooltip (props) {
  return (
    <div className={ `popup ${props.isOpen && 'popup_opened'}` }>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть попап"
          onClick={props.onClose}
        >
        </button>

        <p className="popup__text">`Error: {props.errorMessage}`</p>
      </div>
    </div>
  )
}

export default InfoTooltip;
