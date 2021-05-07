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

  likeMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
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
