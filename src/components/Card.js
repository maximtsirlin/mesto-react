import { useContext } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext) //использую хук useContext
 
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Далее в разметке используем переменную для условного рендеринга
  const cardDeleteButtonClassName = (
    `cards__delete ${isOwn ? 'cards__delete-button_active' : 'cards__delete'}`
  );

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `cards__button ${isLiked ? 'cards__button-active' : 'cards__button'}` 
  );


  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
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
              className={cardLikeButtonClassName}
              type="button"
              onClick={handleLikeClick}
            ></button>
            <p className="cards__like-counter">{card.likes.length}</p>
          </div>

          {isOwn && <button
          className={cardDeleteButtonClassName}
          type="button"
          onClick={handleDeleteClick}
        ></button>} 
        </div>  
    </li>
  );
}

export default Card;