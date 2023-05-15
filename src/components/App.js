import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfie from './EditProfile';
import EditAvatar from './EditAvatar';
import AddPlace from './AddPlace';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true); //кнопка добавения карточки
  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);


  const [selectedCard, setSelectedCard] = useState({});

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }


  return (


    <div className="App">


      <body class="root">
        <div class="page">

          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />

          <Footer />


          <EditProfie
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
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
      </body>


    </div>
  );
}

export default App;
