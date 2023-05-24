function PopupWithForm(props) {
    const { title, name, children, isOpen, onClose, buttonText, isLoading } = props;
    return (
      <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <button
            type="button"
            className={`popup__close popup__close_${name}`}
            onClick={onClose}
          ></button>
          
          <h2 className="popup__header">{title}</h2>
          <form
            className={`form__section form__section_${name}`}
            action="#"
            method="post"
            name={`${name}-form`}
            noValidate
          >
            {children}
            <button
              className={`form__save form__save_${name} .form__save_inactive`}
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