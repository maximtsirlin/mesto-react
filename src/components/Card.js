function Card({ card, onCardClick }) {
    function handleClick() {
      onCardClick(card);
    }
  
    return (
      <li className="cards">
        <img
          src={card.link}
          alt={card.name}
          className="card__image card__image_new-image"
          onClick={handleClick}
        />
        <div className="cards__cell">
          <h2 className="cards__description">{card.name}</h2>
          <div className="card__like-container">
            <button
              className="card__button card__button_icon-empty"
              type="button"
            ></button>
            <p className="cards__like-counter">{card.likes.length}</p>
          </div>
          <button
            className="cards__delete"
            type="button"
          ></button>
        </div>
      </li>
    );
  }
  
  export default Card;