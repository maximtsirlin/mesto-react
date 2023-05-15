import PopupWithForm from './PopupWithForm';

function AddPlace(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={'Новое место'}
      name={'add-card'}
      buttonText={'Создать'}
      
    >
      <div className="form__section">
        <input
          id="input_card-title"
          className="form__input form__input_name"
          type="text"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          autoComplete="off"
          required
          defaultValue=""
        />
        <span className="popup__error popup__error_input_card-title"></span>
      </div>
      <div className="form__section">
        <input
          id="input_card-image"
          className="form__input form__input_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          autoComplete="off"
          required
          defaultValue=""

        />
        <span className="form__input-error form__input-error_active"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlace;