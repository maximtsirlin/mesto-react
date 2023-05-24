import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import EditProfilePopup from './EditProfilePopup';

import EditAvatar from './EditAvatar';
import AddPlace from './AddPlace';
import ImagePopup from './ImagePopup';
import api from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function App(props) {


  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true); //кнопка добавения карточки
  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({}); //В компоненте App создайте переменную состояния currentUser и эффект при монтировании
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        setCurrentUser(userInfo)
        setCards(initialCards);
      })
      .catch((err) => console.log(err));
  }, [])

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    if (!isLiked) {
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



  const handleCardDelete = (card) => {
    // setIsLoading(true);
    api
      .deleteCard(card._id)
      .then((newCard) => {
        const newCards = cards.filter((c) =>
          c._id === card._id ? "" : newCard
        );
        setCards(newCards);
      })
      .catch((err) => console.log(err))
      // .finally(() => setIsLoading(false));

  }



  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  };


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

  

  return (





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
          // currentUser={currentUser}
          cards={cards}

        />

        <Footer />



        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />

        <AddPlace
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />

        <EditAvatar
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />


      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
