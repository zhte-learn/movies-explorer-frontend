import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound() {
  return (
    <section className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__subtitle">Страница не найдена</p>
      <Link to="/" className="notfound__link">Назад</Link>
    </section>  
  )
}

export default PageNotFound;
