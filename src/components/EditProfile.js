import PopupWithForm from './PopupWithForm';

function EditProfile(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={'Редактировать профиль'}
      name={'edit-profile'}
      buttonText={'Сохранить'}
      children={
        <>
        <form id="profileEditForm">
          <div className="form__section">
            <input
              id="input_element-user"
              className="form__input form__input_name"
              type="text"
              name="name"
              value=""
              placeholder="Имя пользователя"
              minlength="2"
              maxlength="40"
              autocomplete="off"
              required
            />
            <span className="form__input-error form__input-error_active"></span>
          </div>
          
          <div className="form__section">
            <input
              id="input_element-about"
              className="form__input form__input_job"
              type="text"
              name="job"
              value=""
              placeholder="О себе"
              minlength="2"
              maxlength="200"
              autocomplete="off"
              required
            />
            <span className="form__input-error form__input-error_active"></span>
          </div>
          </form>
        </>
      }
    />
  );
}

export default EditProfile;
