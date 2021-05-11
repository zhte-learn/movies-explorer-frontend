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

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => {
      return this._handleResult(res);
    })
  }

  likeMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(movie),
    })
    .then((res) => {
      return this._handleResult(res);
    })
  }

  dislikeMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('token')}`,
      }
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
