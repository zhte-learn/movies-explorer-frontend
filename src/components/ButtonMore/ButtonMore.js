import './ButtonMore.css';

function ButtonMore(props) {
  return(
    <div className="container container_main-708px">
      <button className="button button_more" type="button" onClick={props.onClick}>Ещё</button>
    </div>
  )
}

export default ButtonMore;
