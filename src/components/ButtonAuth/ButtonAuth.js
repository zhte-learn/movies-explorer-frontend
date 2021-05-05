import './ButtonAuth.css';

function ButtonAuth(props) {
  console.log(props.isValid)
  return(
    <button
      className={`button button_auth ${!props.isValid && "button_auth_disabled"} ${props.isValid && "button_auth_active"}`}
      type="submit">
        {props.text}
    </button>
  )
}

export default ButtonAuth;
