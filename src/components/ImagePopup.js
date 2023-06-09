import React from 'react';

function ImagePopup({ card, onClose }) {

    return (
        <div
            className={`popup popup-image ${card.link ? 'popup_opened' : ''}`}
            onClick={onClose}
        >
            <div className='popup__image-container'>
                <button
                    type='button'
                    className='popup__close popup__close_theme_position'
                    onClick={onClose}
                />
                <figure>
                    <img className='popup__img'
                        src={card.link}
                        alt={card.name} />
                    <figcaption className='popup__figcaption'>{card.name}</figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ImagePopup;