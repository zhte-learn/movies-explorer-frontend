import './Footer.css';

function Footer () {
  return(
    <footer className="footer">
      <div className="footer__content container container_main">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__bottom">
          <span className="footer__copyright">&copy; 2021</span>
          <ul className="footer__links">
            <li><a className="footer__link" href="#" target="_blank">Яндекс.Практикум</a></li>
            <li><a className="footer__link" href="#" target="_blank">Github</a></li>
            <li><a className="footer__link" href="#" target="_blank">Facebook</a></li>
          </ul>
        </div> 
      </div>     
    </footer>
  )
}

export default Footer;
