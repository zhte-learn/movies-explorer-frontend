class Api {
  constructor(config) {
    this._url = config.url;
    //this._headers = config.headers;
  }

  _handleResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Произошла ошибка");
  }

  getAllMovies() {
    return fetch(`${this._url}`, {
      method: 'GET',
    })
    .then((res) => {
      return this._handleResult(res);
    })
  }
}

const MainApi = new Api({
  url: 'http://localhost:3000',
});

export default MainApi;
