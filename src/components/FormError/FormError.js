/* import './FormError.css';
import { useFormWithValidation } from '../../utils/FormValidator';

function FormError(props) {
  const validator = useFormWithValidation();

  return(
    <span
      id={`${props.name}-input-error`}
      className={`form__input-error-message ${!{props.isValid} && 'form__input-error-message_active'}`}>
        {validator.errors.email}  
    </span>


    <span 
      id={props.id}
      className={`form__input-error-message ${validator.errors.formName} && validator.errors.formName.length>0 && 'form__input-error-message_active'}`}>
        {validator.errors.formName}
    </span>
  )
}

export default FormError;
 */