function PopupWithForm(props) {
    const { title, name, children, isOpen, onClose, buttonText } = props;
    return (
      <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <button
            type="button"
            className={`popup__close popup__close_${name}`}
            onClick={onClose}
          ></button>
          <h2 className="popup__title">{title}</h2>
          <form
            className={`popup__form popup__form_${name}`}
            action="#"
            method="post"
            name={`${name}-form`}
            novalidate
          >
            {children}
            <button
              className={`popup__button popup__button_${name} popup__button_disabled`}
              type="submit"
              disabled
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default PopupWithForm;