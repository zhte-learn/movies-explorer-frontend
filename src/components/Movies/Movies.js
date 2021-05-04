import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies (props) {
  return(
    <>
      <Header 
        isLoggedIn={props.isLoggedIn}
      />
      <main className="content">
        <SearchForm />
        <MoviesCardList /> 
      </main>
      <Footer />
    </>
  )
}

export default Movies;