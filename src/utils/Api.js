 class Api {
  constructor({url, headers}) {
    this._baseUrl = url;
    this._headers = headers;
    fetch(this._baseUrl + "users/me", {headers: this._headers}).then(res=>res.json()).then(result => this._myId = result._id)
  }

  _isResultOk(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  };

  getProfile() {
    return fetch(`${this._baseUrl}users/me`, {
        headers: this._headers
      })
        .then(res => this._isResultOk(res))
  };

  patchProfile(values) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(values)
    })
    .then(res => this._isResultOk(res))
  };

  setUserAvatar({link}) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(res => this._isResultOk(res))
  };

  getCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers
    }). then(res => this._isResultOk(res))
  };

  postCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(res => this._isResultOk(res))
  };

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._isResultOk(res))
  }

  like(cardId, isLiked) {
      console.log("se like to ", isLiked)
      return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
        method: isLiked ? 'DELETE' : 'PUT',
        headers: this._headers
      })
      .then((res) => this._isResultOk(res))
    }
};


const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-64/',
  headers: {
    authorization: '8b7f26ff-df87-4fed-b7d8-0d5c2987dff7',
    'content-type': 'application/json'
  }
}
);

export default api;
