class Auth {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _handleResult(res) {
    return res.json().then((json) => {
      if(!res.ok) {
        throw json;
      }
      return json;
    })
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    .then((res) => this._handleResult(res))
  }

  authorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then((res) => {
      return this._handleResult(res);
    })
    .then((data) => {
      localStorage.setItem('token', data.token);
      return data;
    });
  }

  getContent(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
      }
    })
    .then((res) => {
      return this._handleResult(res);
    })
  }
}

const auth = new Auth({
  url: 'https://api.movies.nomoredomains.club/api',
  headers: {
    'content-type': 'application/json'
  }
});

export default auth;
