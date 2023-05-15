function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
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
              className="cards__button"
              type="button"
            ></button>
            <p className="cards__like-counter">{card.likes.length}</p>
          </div>
        </div>

     
    </li>
  );
}

export default Card;