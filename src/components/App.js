import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (

    
    <div className="App">
       
      
    <body class="root">
  <div class="page">
    
    <Header />
    <Main />

    <Footer />


    <main class="content">
      {/* <section class="profile">
        <div class="profile__image-overlay"></div>
        <img src="<%=require('./images/image.jpg')%>" alt="Жак-Ив Кусто аватар" class="profile__image"/>
        <div class="profile__item">
          <div class="profile__form">
            <h1 class="profile__title"></h1>
            <button class="profile__edit-button profile__icon" type="button"></button>
          </div>
          <p class="profile__description"></p>

        </div>
        <button class="profile__add-button" type="button" aria-label="кнопка"></button>
      </section> */}

      <div id="app"></div>

      <template id="cards__template">
        <li class="cards__cell">
          <img src="./images/kamchatka.png" alt="Камчатка вулкан" class="cards__item"/>
          <button class="cards__delete" type="button"></button>
          <div class="cards__form">
            <h2 class="cards__description"></h2>
            <div>
              <button class="cards__button" type="button" aria-label="Камчатка лайк"></button>
              <p class="cards__like-counter">0</p>
            </div>
          </div>
        </li>
      </template>

      <section class="cards">
      </section>

    </main>
    {/* <footer class="footer">
      <p class="footer__copyright">© 2020 Mesto Russia</p>
    </footer> */}

    <div class="popup popup_edit">
      <div class="popup__container">
        <button class="popup__close" type="button"></button>
        <h2 class="popup__header">Редактировать профиль</h2>
        <form id="profileEditForm" class="form" name="form">
          <div class="form__section">
            <input type="text" name="name" class="form__input form__input_name" required minlength="2" maxlength="40"/>
            <div class="form__input-error form__input-error_active" id="name"></div>
          </div>
          <div class="form__section">
            <input type="text" name="job" class="form__input form__input_job" required minlength="2" maxlength="40"/>
            <div class="form__input-error form__input-error_active" id="job"></div>
          </div>
          <button class="form__save" type="submit" disabled="true">Сохранить</button>
        </form>
      </div>
    </div>

    <div class="popup popup_add">
      <div class="popup__container">
        <button class="popup__close" type="button"></button>
        <h2 class="popup__header">Новое место</h2>
        <form id="addPlaceForm" class="form" name="form">
          <div class="form__section">
            <input type="text" name="name" placeholder="Название" class="form__input form__input_name" required
              minlength="2" maxlength="30"/>
            <div class="form__input-error form__input-error_active" id="title"></div>
          </div>
          <div class="form__section">
            <input type="url" name="link" placeholder="Ссылка на картинку" class="form__input form__input_link"
              required/>
            <div class="form__input-error form__input-error_active" id="link"></div>
          </div>
          <button class="form__save" type="submit" disabled="true">Создать</button>
        </form>
      </div>
    </div>

    <div class="popup popup_confirm">
      <div class="popup__container">
        <button class="popup__close" type="button"></button>
        <h2 class="popup__header">Вы уверены?</h2>
        <form id="addConfirmForm" class="form" name="form">
          <div class="form__section">
            <button class="form__save" type="submit">Да</button>
          </div>
        </form>
      </div>
    </div>


    <div class="popup popup_avatar">
      <div class="popup__container">
        <button class="popup__close" type="button"></button>
        <h2 class="popup__header">Обновить аватар</h2>
        <form id="addAvatar" class="form" name="form">
          <div class="form__section">
            <input type="url" name="link" placeholder="Ссылка на картинку" class="form__input form__input_link"
              required/>
            <div class="form__input-error form__input-error_active" id="confirm"></div>
          </div>
          <button class="form__save" type="submit" disabled="true">Сохранить</button>
        </form>
      </div>
    </div>


    <div class="popup popup_image">
      <div class="popup__image-container">
        <button class="popup__close popup__close_theme_position" type="button"></button>
        <figure>
          <img src="./images/kamchatka.png" alt="Камчатка вулкан" class="popup__img"/>
          <figcaption class="popup__figcaption"></figcaption>
        </figure>
      </div>
    </div>

  </div>
</body>


    </div>
  );
}

export default App;
