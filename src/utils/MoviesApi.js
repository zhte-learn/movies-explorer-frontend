class Api {
  constructor(config) {
    this._url = config.url;
    //this._headers = config.headers;
  }

  _handleResult(res) {
    return res.json().then((json) => {
      if(!res.ok) {
        throw json;
      }
      return json;
    })
  }

  /* _handleResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Произошла ошибка");
  } */

  getAllMovies() {
    return fetch(`${this._url}`, {
      method: 'GET',
    })
    .then((res) => {
      return this._handleResult(res);
    })
  }
}

const api = new Api({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default api;
