import { useContext } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext)
  const isOwn = card.owner._id === currentUser._id;

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `cards__button ${isLiked && 'card__like-button_active'}` 
  );;

  function handleClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    onCardLike(card);
  }

  function handleLikeClick() {
    onCardDelete(card);
  }

  return (
    <li className="cards__cell">
      <img
        src={card.link}
        alt={card.name}
        className="cards__item"
        onClick={handleClick}
      />
      <button
          className="cards__delete"
          type="button"
        ></button>
        <div className="cards__form">
          <h2 className="cards__description">{card.name}</h2>
          <div>
            <button
              className="cardLikeButtonClassName"
              type="button"
              onClick={handleLikeClick}
            ></button>
            <p className="cards__like-counter">{card.likes.length}</p>
          </div>

          {isOwn && <button
          className="card__delete-button card__delete-button_js"
          type="button"
          onClick={handleDeleteClick}
        ></button>} 

        </div>

     
    </li>
  );
}

export default Card;