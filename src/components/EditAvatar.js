import PopupWithForm from './PopupWithForm';

function EditAvatar(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={'Обновить аватар'}
      name={'edit-avatar'}
      buttonText={'Сохранить'}

    >
      <input
        id="addAvatar"
        className="form__input form__input_link"
        type="url"
        name="avatar"
        placeholder="Ссылка на фото"
        autoComplete="off"
        minLength="2"
        required
        defaultValue=""

      />
      <span className="form__input-error form__input-error_active"></span>
    </PopupWithForm>
  );
}

export default EditAvatar;