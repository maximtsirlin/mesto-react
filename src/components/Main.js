import { useState, useEffect } from 'react';

import Card from './Card.js';
import api from '../utils/Api.js';

function Main(props) {
  const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = props;

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.getProfile()
      .then(data => {
      setUserName(data.name)
      setUserDescription(data.about)
      setUserAvatar(data.avatar)
    })
    .catch((err) => {
      console.log(err);
    });

    api.getCards()
    .then((res) => {
      setCards(res)
    })
    .catch((err) => {
      console.log(err);
    });

  },[])

  

  return (
    <main className="content">
      {/* <!-- profile --> */}
      <section className="profile">

        <img
          src={userAvatar}
          alt="Фотография профиля"
          className="profile__image"
        />
        <button
          type="button"
          className="profile__image-overlay profile__image"
          aria-label="Изменить фото"
          onClick={onEditAvatar}
        ></button>


        <div className="profile__item">
          <div className="profile__form">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__button-edit profile__icon"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      {/* <!-- Elements --> */}
      <section
        className="elements"
        aria-label="elements"
      >

        <ul className="cards">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
              ></Card>
            );
          })}

        </ul>

      </section>
    </main>
  );
}


function handleEditAvatarClick() {
  const editAvatarPopup = document.querySelector('.popup_edit-avatar');
  editAvatarPopup.classList.add('popup_is-opened');
}

function handleEditProfileClick() {
  const editProfilePopup = document.querySelector('.popup_edit-profile');
  editProfilePopup.classList.add('popup_is-opened');
}

function handleAddPlaceClick() {
  const addPlacePopup = document.querySelector('.popup_add-place');
  addPlacePopup.classList.add('popup_is-opened');
}

export default Main;