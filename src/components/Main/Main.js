import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main (props) {
  return(
    <>
      <Header 
        isLoggedIn={props.isLoggedIn}
      />
      <main className="content">
        <Promo /> 
        <NavTab />  
        <AboutProject 
          id="about-project"
        />
        <Techs 
          id="techs"
        />
        <AboutMe 
          id="about-me"
        />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Main;
