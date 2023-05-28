import React, { useEffect, useState } from 'react'; //1.1 Импортируем React, useState и useEffect из библиотеки React.

import api from '../utils/Api.js'; //1.2 Импортируем вашу библиотеку для работы с API и называем ее api.


import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import EditProfilePopup from './EditProfilePopup';

import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function App(props) {

  const [currentUser, setCurrentUser] = useState({}); //1.3 Внутри компонента App используем хук useState для создания переменной состояния currentUser. Изначально устанавливаем значение null.

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false); //добавляю useState для редактирования профиля
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isFullImagePopupOpen, setFullImagePopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [isLoading, setIsLoading] = useState(false);



  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true); //кнопка добавения карточки
  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);


//1.4 Используем хук useEffect с пустым массивом зависимостей ([]) 
//для создания эффекта при монтировании компонента. Внутри эффекта 
//вызываем асинхронную функцию fetchUserInfo, которая получает информацию 
//о пользователе через api.getUserInfo и обновляет состояние currentUser с помощью setCurrentUser.

useEffect(() => {
  Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userInfo, initialCards]) => {
      setCurrentUser(userInfo)
      setCards(initialCards);
    })
    .catch((err) => console.log(err));
  }, [])



  //Также добавьте в Card обработчик клика handleLikeClick и вызовите из него onCardLike
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setFullImagePopupOpen(true);
  }


//добавьте функцию handleCardLike в компонент App со следующим содержимым:
  const handleCardLike = (card) => {
        // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    if (!isLiked) {

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
        .putLike(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => console.log(err));
    }
    else {
      api
        .removeLike(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(err));
    }
  }


//по аналогии
  const handleCardDelete = (card) => {
    setIsLoading(true);
    api
      .deleteCard(card._id)
      .then((newCard) => {
        const newCards = cards.filter((c) =>
          c._id === card._id ? "" : newCard
        );
        setCards(newCards);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  const handleUpdateUser = (info) => {
    setIsLoading(true);
      api
      .setUserInfo(info)
      .then((newUser) => {
        setCurrentUser(newUser)
        closeAllPopups()
    })
    .catch((err) => console.log(err))
    .finally(() => setIsLoading(false));
  }



  const handleUpdateAvatar = (avatar) => {
    setIsLoading(true);

    api
      .changeAvatar(avatar)
      .then((newAvatar) => {
        setCurrentUser(newAvatar)
        closeAllPopups()
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));

  }



  const handleAddPlaceSubmit = (card) => {
    setIsLoading(true);
    api
      .postCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));

  }




  const closeAllPopups = () => {
    setEditProfilePopupOpen(false); // + 
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setFullImagePopupOpen(false);
    setSelectedCard({});
  };

//1.5 Возвращаем JSX

  return (
//2. Создайте объект контекста и используйте провайдер
//оборачиваю в него содержимое всего корневого компонента

    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">

        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          currentUser={currentUser}
          cards={cards}
        />

        <Footer />



        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          isLoading={isLoading}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />

        <ImagePopup
          card={selectedCard}
          isOpen={isFullImagePopupOpen}
          onClose={closeAllPopups}
        />

      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
